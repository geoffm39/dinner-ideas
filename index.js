import express from "express";
import axios from "axios";
import dotenv from 'dotenv';

dotenv.config()

const app = express();
const port = 3000;

const API_URL = "https://api.spoonacular.com/recipes/complexSearch";
const apiConfig = {
    headers: { "x-api-key": process.env.API_KEY}
};

const cuisines = ["Any", "African", "Asian", "American", "British", "Cajun", "Caribbean", "Chinese", "European", 
    "Eastern European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", 
    "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", 
    "Spanish", "Thai", "Vietnamese"];

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs", { currentPage: "home" });
});

app.get("/search", (req, res) => {
    res.render("search.ejs", { currentPage: "search", cuisines: cuisines });
});

app.get("/results", async (req, res) => {
    try {
        const updatedApiConfig = Object.assign({}, apiConfig,
            {
                params: Object.assign(
                    {}, 
                    req.query,
                    { sort: "max-used-ingredients"}
                )
            }
        )
        const result = await axios.get(API_URL, updatedApiConfig);
        console.log(result.data.results)
        res.render("results.ejs", { currentPage: "results", results: result.data.results});
    } catch (error) {
        res.render("results.ejs", { currentPage: "results", results: JSON.stringify(error.response.data)});
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
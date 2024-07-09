import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

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

app.get("/results", (req, res) => {
    const { query: { query, cuisine, includeIngredients }} = req;
    res.render("results.ejs", { currentPage: "results"});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
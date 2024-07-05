import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/search", (req, res) => {
    res.render("search.ejs");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
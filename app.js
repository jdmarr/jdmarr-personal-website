//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeContent = "Hi, I'm Jordan. I'm a software engineer with a passion for autonomous vehicles and robotics. I work at Nvidia in Santa Clara, California, on the autonomous vehicles localization team. Not document translation, but estimation of a vehicle's position and orientation in the world.  It's exciting work, as we take all the noisy data from mass-market sensors, and refine it into an accurate estimate that is then used for vehicle control out on the road. It's given me extensive experience with estimation algorithms for camera, radar, and lidar, as well as allowing me to flex my muscles in C++, CUDA, and Python.";

const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";

const posts = [];

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    homeParagraph: homeContent,
    posts: posts
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    aboutParagraph: aboutContent
  });
});

app.get("/contact", (req, res) => {
  res.render("contact");
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});

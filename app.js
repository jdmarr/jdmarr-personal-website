//jshint esversion:6

const express = require("express");
const ejs = require("ejs");
const https = require("https");

const homeContent = "Hi, I'm Jordan. I'm a software engineer with a passion for autonomous vehicles and robotics. I work at Nvidia in Santa Clara, California, on the autonomous vehicles localization team. Not document translation, but estimation of a vehicle's position and orientation in the world.  It's exciting work, as we take all the noisy data from mass-market sensors, and refine it into an accurate estimate that is then used for vehicle control out on the road. It's given me extensive experience with estimation algorithms for camera, radar, and lidar, as well as allowing me to flex my muscles in C++, CUDA, and Python.";

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

function checkWebsite(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, function(res) {
        resolve(res.statusCode === 200);
      })
      .on("error", function(e) {
        resolve(false);
      });
  })
}

app.get("/", (req, res) => {
  res.render("home", {
    homeParagraph: homeContent
  });
});

app.get("/about", (req, res) => {
  const qsetLink = "https://qset.ca";
  const starsLink = "https://starslab.ca/";
  const nvidiaLink = "https://news.developer.nvidia.com/drive-labs-how-localization-helps-vehicles-find-their-way/";

  checkWebsite(qsetLink).then(qsetLinkValid => {
    checkWebsite(starsLink).then(starsLinkValid => {
      checkWebsite(nvidiaLink).then(nvidiaLinkValid => {
        res.render("about", {
          qsetLinkValid: qsetLinkValid,
          qsetLink: qsetLink,
          starsLinkValid: starsLinkValid,
          starsLink: starsLink,
          nvidiaLinkValid: nvidiaLinkValid,
          nvidiaLink: nvidiaLink
        });
      });
    });
  });

});

app.get("/contact", (req, res) => {
  res.render("contact");
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});

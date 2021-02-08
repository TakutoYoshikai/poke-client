const express = require("express");
const app = express();
const player = require("play-sound")();

app.get("/", (req, res) => {
  player.play("./nyanpass.mp3", err => {
    console.error(err);
  });
});

app.listen(3002);

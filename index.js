const express = require("express");
const app = express();
const player = require("play-sound")();
const request = require("request");

const host = process.argv[2];
const id = process.argv[3];
const sound = process.argv[4];

function register(host, id) {
  const options = {
    url: "http://" + host + ":3000" + "/register/" + id,
    method: "GET"
  }
  request(options, function(err, response, body) {
    if (err) {
      console.error(err);
    }
  });
}

register(host, id);

app.get("/", (req, res) => {
  player.play(sound, err => {
    console.error(err);
  });
  res.send({ message: "OK" });
});

app.listen(3002);

const express = require("express");
const router = express.Router();
const Gif = require("../models/gif");

router.get("/", (req, res) => {
  Gif.find({})
    .then((gifs) => {
      res.json(gifs);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/", (req, res) => {
  Gif.create(req.body).then(() => {
    Gif.find({}).then((allGifs)=>{
      res.json(allGifs)
    })
  });
});

router.put("/:id", (req, res) => {
  Gif.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
    Gif.find({}).then((gifs)=>{
      res.json(gifs)
    })
  });
});

router.delete("/:id", (req, res) => {
  Gif.findByIdAndDelete(req.params.id).then(() => {
    Gif.find({}).then((gifs)=>{
      res.json(gifs)
    })
  });
});

module.exports = router;

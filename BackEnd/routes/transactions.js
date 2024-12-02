const { Router } = require("express");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("hello world from transaction router");
});

module.exports = router;

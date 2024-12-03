const { Router } = require("express");
const {
  addIncome,
  getIncomes,
  deleteIncomes,
} = require("../controllers/income");

const router = require("express").Router();

// router.get("/", (req, res) => {
//   res.send("hello world from transaction router");
// });
// addIncome comes from controller
// user reach endpoint '/add-in' will trigger a post
router
  .post("/add-income", addIncome)
  .get("/get-incomes", getIncomes)
  .delete("/delete-income/:id", deleteIncomes);

module.exports = router;

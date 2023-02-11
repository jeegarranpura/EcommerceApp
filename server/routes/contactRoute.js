/* eslint-disable no-use-before-define */
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/simpleDemo", simpleDemo);
module.exports = router;
// const simpleDemo () => (){
// jaimin mistake
// }
// \f
async function simpleDemo(req, res, next) {
  const simple = [
    { name: "jaimin", age: 23 },
    { name: "Jeegar", age: 23 },
  ];
  res.json(simple);
}

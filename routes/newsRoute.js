const express = require("express");
const {
  getTrendingNew,
  getTheHinduLatestNew,
  getHindustanTimesLatestNew,
  getTheIndianExpressLatestNew,
  getTimesOfIndiaLatestNew,
  getNewYorkTimesLatestNew,
  getNBCLatestNew,
} = require("../controllers/newsController");

const router = express.Router();

router.get("/trending", getTrendingNew);
router.get("/thehindu", getTheHinduLatestNew);
router.get("/hindustantimes", getHindustanTimesLatestNew);
router.get("/theindianexpress", getTheIndianExpressLatestNew);
router.get("/thetimesofindia", getTimesOfIndiaLatestNew);
router.get("/newyorktimes", getNewYorkTimesLatestNew);
router.get("/nbc", getNBCLatestNew);

module.exports = router;

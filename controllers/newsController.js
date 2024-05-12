const {
  getTrendingNews,
  getTheHinduLatestNews,
  getHindustanTimesLatestNews,
  getTheIndianExpressLatestNews,
  getTimesOfIndiaLatestNews,
  getNewYorkTimesLatestNews,
  getNBCLatestNews,
} = require("news-scrapper");

const getTrendingNew = async (req, res) => {
  try {
    const data = await getTrendingNews();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getTheHinduLatestNew = async (req, res) => {
  try {
    const data = await getTheHinduLatestNews();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getHindustanTimesLatestNew = async (req, res) => {
  try {
    const data = await getHindustanTimesLatestNews();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getTheIndianExpressLatestNew = async (req, res) => {
  try {
    const data = await getTheIndianExpressLatestNews();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getTimesOfIndiaLatestNew = async (req, res) => {
  try {
    const data = await getTimesOfIndiaLatestNews();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getNewYorkTimesLatestNew = async (req, res) => {
  try {
    const data = await getNewYorkTimesLatestNews();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getNBCLatestNew = async (req, res) => {
  try {
    const data = await getNBCLatestNews();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getTrendingNew,
  getTheHinduLatestNew,
  getHindustanTimesLatestNew,
  getTheIndianExpressLatestNew,
  getTimesOfIndiaLatestNew,
  getNewYorkTimesLatestNew,
  getNBCLatestNew,
};

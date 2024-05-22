const express = require("express");
const router = express.Router();

const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const access_key = "55b29b8d621215a01d17d0e1039cf110";

async function getWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${access_key}&lang=pt_br`,
  );
  const data = await response.json();
  return data;
}

router.get("/get", async (req, res) => {
  const city = req.query.city;

  try {
    const data = await getWeather(city);
    res.send(data);
    return data;
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;

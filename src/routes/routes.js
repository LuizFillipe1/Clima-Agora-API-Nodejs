const express = require("express");
const router = express.Router();

router.get("/add", (req, res) => {
    res.send("add");
});


const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const access_key = "55b29b8d621215a01d17d0e1039cf110";
let query = "Sao Paulo";

async function getWeather(city) {
    // const response = await fetch(url + "/current?access_key=" + access_key + "&query=" + city);

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${access_key}&lang=pt_br`);

    const data = await response.json();

    // let data_weather_user = data_weather(data.current.temperature, data.current.wind_speed,
    //     data.current.pressure, data.current.precip, data.weather_descriptions, data.location.localtime, data.location.utc_offset, data.location.name);
    // data_weather_user.printData();

    return data;
};

router.get("/get", async (req, res) => {
    const city = req.query.city;

    try {
        const data1 = await getWeather(city);
        res.send(data1);
        // console.log(data1.current.temperature);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


module.exports = router;
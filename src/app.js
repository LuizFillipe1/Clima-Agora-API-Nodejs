const express = require('express');
const app = express();
const PORT = 3000;

const url = "http://api.weatherstack.com";
const access_key = "6f8783961bd4598f89ab46352739cc0d";
const query = "Sao Paulo";


app.listen(PORT, function () {
    console.log(`O express está rodando na porta ${PORT}`);
});

app.get('/', (req, res) => {
    res.send("Está funcionando");
});

const params = {
    access_key: '6f8783961bd4598f89ab46352739cc0d',
    query: 'New York'
}




async function getWeather() {


    const response = await fetch(url + "/current?access_key=" + access_key + "&query=" + query);

    // const response = await fetch("http://api.weatherstack.com/current?access_key=6f8783961bd4598f89ab46352739cc0d%query=SaoPaulo");
    // const response = await fetch("http://api.weatherstack.com/current?access_key=6f8783961bd4598f89ab46352739cc0d&query=New%20York");

    console.log(response);

    const data = await response.json();

    console.log(data);

    let data_weather_user = data_weather(data.current.temperature, data.current.wind_speed,
        data.current.pressure, data.current.precip, data.weather_descriptions, data.location.localtime, data.location.utc_offset, data.location.name);
    data_weather_user.printData();
};


function data_weather(current_temperature, current_wind_speed, current_pressure, current_precip, weather_descriptions, localtime, utc_offset, location_name) {

    const data = {
        current_temperature: current_temperature,
        current_wind_speed: current_wind_speed,
        current_pressure: current_pressure,
        current_precip: current_precip,
        weather_descriptions: weather_descriptions,
        localtime: localtime,
        utc_offset: utc_offset,
        location_name: location_name,
        printData: function () {
            console.log(`Temperatura é ${current_temperature}, hora local é ${localtime}, cidade ${location_name}`);
        }
    }
    return data;
};



getWeather();


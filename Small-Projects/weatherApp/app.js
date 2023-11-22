const apiKey  = "1d8228106da4770b59c5c51fceeae29e"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=asheville"

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json()

    console.log(data)
}

checkWeather()
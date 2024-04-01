const apiKey = "2df0a1d475794dd8f957fe758db21430";

const apiLink = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const inputBox = document.querySelector(".search input");
const btn = document.querySelector(".search button");

async function weatherForecast(City){
    const response = await fetch(apiLink + City +`&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        const data = await response.json();

    const temp = document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    const city = document.querySelector(".city").innerHTML = data.name;
    const humidity = document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    const wind = document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";




    let weatherIconSrc = "";
        switch (data.weather[0].main) {
            case "Clouds":
                weatherIconSrc = "./images/clouds.png";
                break;
            case "Clear":
                weatherIconSrc = "./images/clear.png";
                break;
            case "Rain":
                weatherIconSrc = "./images/rain.png";
                break;
            case "Drizzle":
                weatherIconSrc = "./images/drizzle.png";
                break;
            case "Mist":
                weatherIconSrc = "./images/mist.png";
                break;
            case "Snow":
                weatherIconSrc = "./images/snow.png";
                break;
            default:
                weatherIconSrc = ""; // Handle other weather conditions if needed
        }

        const weatherIcon = document.querySelector(".weather-icon").src = weatherIconSrc;


    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
 
    }
}

btn.addEventListener('click', ()=>{
    weatherForecast(inputBox.value);

})

inputBox.addEventListener('keypress', (e) => {
    console.log(e.key);
    if (e.key === 'Enter') {
        weatherForecast(inputBox.value);
    }
});


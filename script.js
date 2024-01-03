const key = "9f7d808db68b52408249ce7f1ef7e487";
const url = "https://api.openweathermap.org/data/2.5/weather?q="
const sehir = document.querySelector(".sehir");
const temp = document.querySelector(".temp");
const forecast = document.querySelector(".forecast");
const maxMin = document.querySelector(".max-min");
const input = document.querySelector("#sehirInput");
const button = document.querySelector("button");
const hissedilen = document.querySelector(".hissedilen")


async function getInput() {
    let inputValue = input.value ;
    let makeURL = `${url}${inputValue}&units=metric&appid=${key}&lang=tr`;
    const response = await fetch(`${makeURL}`);
    const data = await response.json();
    console.log(data);
    sehir.innerText = data.name;
    temp.innerText = `${Math.round(data.main.temp)}°C`;
    maxMin.innerText = `${Math.round(data.main.temp_min)}°C / ${Math.round(data.main.temp_max)}°C`;
    forecast.innerText = `${data.weather[0].description}`;
    hissedilen.innerText = `Hissedilen: ${Math.round(data.main.feels_like)}°C`;

}






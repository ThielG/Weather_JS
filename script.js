let temp = document.querySelector('.temp')
let tempIcon = document.querySelector('.temp-icon')
let condition = document.querySelector('.condition')
let city = document.querySelector('.city')
let variation = document.querySelector('.variation')
let input = document.querySelector('#input')
let form = document.querySelector('form')
let wind = document.querySelector('.wind')
let windDirection = document.querySelector('.wind-direction')
let windIcon = document.querySelector('.wind-icon')
let humidityIcon = document.querySelector('.humidity-icon')
let humidity = document.querySelector('.humidity')
let feelsLike = document.querySelector('.feels-like')
let temp1 = document.querySelector('.temp-1')
let temp2 = document.querySelector('.temp-2')
let temp3 = document.querySelector('.temp-3')
let date1 = document.querySelector('.date-1')
let date2 = document.querySelector('.date-2')
let date3 = document.querySelector('.date-3')
let mm1 = document.querySelector('.mm-1')
let mm2 = document.querySelector('.mm-2')
let mm3 = document.querySelector('.mm-3')

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    getWeather(input.value)
})
console.log(input)

async function getWeather(local) {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=dfb1a8deaf014eb49b3220726241104&q=${local}&days=4&aqi=no&alerts=no&lang=pt`);
    let data = await response.json()
    console.log(data);

    if (data.hasOwnProperty("current")) {
        console.log(data.location.localtime)
        console.log(data.current.wind_kph)
        windIcon.innerHTML = `<i class="fa-solid fa-wind fa-xl">`
        wind.innerHTML = `<h3>Vento: ${data.current.wind_kph} km/h</h3>`
        console.log(data.current.wind_dir)
        windDirection.innerHTML = `<h5>Direção: ${data.current.wind_dir}</h5>`
        console.log(data.current.temp_c)
        console.log(data.current.condition.text)
        tempIcon.innerHTML = `<i class="fa-solid fa-cloud-moon fa-xl"></i>`
        temp.innerHTML = `<h2>${data.current.temp_c}°C</h2>`
        condition.innerHTML = `<h4>${data.current.condition.text}</h4>`
        console.log(data.location.name);
        console.log(data.location.region);
        console.log(data.location.country);
        city.innerHTML = `<h3>${data.location.name} - ${data.location.region} - ${data.location.country}</h3>`
        console.log(data.forecast.forecastday[0].day.mintemp_c)
        console.log(data.forecast.forecastday[0].day.maxtemp_c)
        variation.innerHTML = `<h5><i class="fa-solid fa-chevron-down"></i> Min: ${data.forecast.forecastday[0].day.mintemp_c}°C <i class="fa-solid fa-chevron-up"></i> Max: ${data.forecast.forecastday[0].day.maxtemp_c}°C</h5>`
        humidityIcon.innerHTML = `<i class="fa-solid fa-umbrella fa-xl"></i>`
        console.log(data.current.humidity)
        console.log(data.current.feelslike)
        humidityIcon.innerHTML = `<i class="fa-solid fa-umbrella fa-xl"></i>`
        humidity.innerHTML = `<h3>Umidade: ${data.current.humidity}%</h3>`
        feelsLike.innerHTML = `<h5>Sensação térmica: ${data.current.feelslike_c}°C</h5>`
        console.log(data.current.condition.icon)
        console.log(data.current.wind_kph)
        console.log(data.current.humidity)
        console.log(data.forecast.forecastday[1].day.avgtemp_c)
        console.log(data.forecast.forecastday[2].day.avgtemp_c)
        console.log(data.forecast.forecastday[3].day.avgtemp_c)
        console.log(data.forecast.forecastday[1].day.mintemp_c)
        console.log(data.forecast.forecastday[2].day.mintemp_c)
        console.log(data.forecast.forecastday[3].day.mintemp_c)
        console.log(data.forecast.forecastday[1].day.maxtemp_c)
        console.log(data.forecast.forecastday[2].day.maxtemp_c)
        console.log(data.forecast.forecastday[3].day.maxtemp_c)
        temp1.innerHTML = `<h2>${data.forecast.forecastday[1].day.avgtemp_c}°C</h2>`
        temp2.innerHTML = `<h2>${data.forecast.forecastday[2].day.avgtemp_c}°C</h2>`
        temp3.innerHTML = `<h2>${data.forecast.forecastday[3].day.avgtemp_c}°C</h2>`
        date1.innerHTML = `<h4>(${data.forecast.forecastday[1].date})</h4>`
        date2.innerHTML = `<h4>(${data.forecast.forecastday[2].date})</h4>`
        date3.innerHTML = `<h4>(${data.forecast.forecastday[3].date})</h4>`
        mm1.innerHTML = `<h5><i class="fa-solid fa-chevron-down"></i> Min: ${data.forecast.forecastday[1].day.mintemp_c}°C <i class="fa-solid fa-chevron-up"></i> Max: ${data.forecast.forecastday[1].day.maxtemp_c}°C</h5>`
        mm2.innerHTML = `<h5><i class="fa-solid fa-chevron-down"></i> Min: ${data.forecast.forecastday[2].day.mintemp_c}°C <i class="fa-solid fa-chevron-up"></i> Max: ${data.forecast.forecastday[2].day.maxtemp_c}°C</h5>`
        mm3.innerHTML = `<h5><i class="fa-solid fa-chevron-down"></i> Min: ${data.forecast.forecastday[3].day.mintemp_c}°C <i class="fa-solid fa-chevron-up"></i> Max: ${data.forecast.forecastday[3].day.maxtemp_c}°C</h5>`
    } else {
        temp.innerHTML = "<p>Erro: nome inválido. :(</p>";
    }
}

const container = document.querySelector('.continer');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
search.addEventListener('click', () => {
    const APIKey= 'f0b2e87acd6ce09e4b0da9b906a6afd5';
    const city=document.querySelector('search-box input').ariaValueMax;

    if(city == '')
        return;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}')
    .then(response => response.json()).then(json => {

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch(json.weather[0].main) {
            case 'Clear':
                image.src = 'clear.png';
                break;

            case 'Rain':
                image.src = 'rain.png';
                break;

            case 'Snow':
                image.src = 'snow.png';
                break;

            case 'Clouds':
                image.src = 'cloud.png';
                break;

            case 'Mist':
                image.src = 'mist.png';
                break;
            
            case 'Haze':
                image.src = 'mist.png';
                break;

            default:
                image.src = 'cloud.png';
        }

        temperature.innerHTML = `${}`;
        description.innerHTML = `${}`;
        humidity.innerHTML = `${}`;
        wind.innerHTML = `${}`;

    });

});




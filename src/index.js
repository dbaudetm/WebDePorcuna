const input = document.querySelector("#input");
const city = document.querySelector("#city");

const cityName = document.querySelector("#cityName");
const Temp = document.querySelector("#temp");
const main = document.querySelector("#main");
const discription = document.querySelector("#discription");
const image = document.querySelector("#image");
function weatherUpdate() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${"Porcuna"}&appid=ded8fb24404261afff13e88870c2cf84&lang=sp`);
    //xhr.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${"Porcuna"}&lang=es&appid=25040fd4d13ee481256615303a864d13`);

    //api.openweathermap.org/data/2.5/weather?q=${"Porcuna"}&lang=es&appid=25040fd4d13ee481256615303a864d13
    // in place of appid enter your open weather API Key
    // You can create it for free
    // https://home.openweathermap.org/users/sign_up

    http: xhr.send();
    xhr.onload = () => {
        if (xhr.status === 404) {
            Temp.innerHTML = "Api no disponible.";
        } else {
            var data = JSON.parse(xhr.response);
            console.log(data);

            if (data.message === "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info.") {
                Temp.innerHTML = `Se hs superado las llamadas a la api `;

                main.innerHTML = "En un tiempo volvera a estar disponible";
            } else {
                Temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;

                main.innerHTML = data.weather[0].description;
            }
        }
    };
}

weatherUpdate();

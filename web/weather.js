const weather = document.querySelector(".js-weather");

const COORDS = 'coords';
const API_KEY = "fb7499ac1766add74a621503d6e9a06b";

function getWeather(lat,lng){
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
  .then(function(response) {
    return response.json();
  })
  .then(function(json){
     const temperature = json.main.temp;
     const place = json.name;
     if(temperature > 15){
         weather.innerText = `${temperature}˚  현재 날씨가 따뜻하네요!
         지금은 ${place}에 있어요`;
     }else {
     weather.innerText = `${temperature}˚  현재 날씨가 쌀쌀하네요!
     지금은 ${place}에 있어요`;
    }
   });
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude,longitude)
}

function handleGeoError(){
  console.log("Cant access geo location");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError)
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null){
      askForCoords();
  }else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude,parseCoords.longitude);

  }
}


function init(){
  loadCoords();
}

init();

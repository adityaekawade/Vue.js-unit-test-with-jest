export default function request(zipCode){
  return fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=YOURAPICODE`)
          .then(response => response.json())
          .then(data => data)
}

import request from './request';

export default class Model {
  fetchResponse(fetch, zipCode){
    return fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=7627d7cba3754868f117fb69ac6d5bdc`)
            .then(response => response.json())
            .then(data => data)
  }
  requestResponse(zipCode){
    return request(zipCode);
  }
  convertToFarenhite(kelvinTemp){
    return (Math.round((kelvinTemp-273.15)*1.8)+32)
  }

}

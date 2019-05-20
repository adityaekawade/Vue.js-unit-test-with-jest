import Model from '@/components/Model';
var model = new Model();

const fakeData = {
  "coord": {
  "lon": -111.89,
  "lat": 40.77
  },
  "weather": [
  {
  "id": 804,
  "main": "Clouds",
  "description": "overcast clouds",
  "icon": "04n"
  }
  ],
  "base": "stations",
  "main": {
  "temp": 271.34,
  "pressure": 1025,
  "humidity": 84,
  "temp_min": 270.45,
  "temp_max": 272.15
  },
  "visibility": 11265,
  "wind": {
  "speed": 3.1,
  "deg": 250
  },
  "clouds": {
  "all": 90
  },
  "dt": 1547345700,
  "sys": {
  "type": 1,
  "id": 5859,
  "message": 0.0042,
  "country": "US",
  "sunrise": 1547391022,
  "sunset": 1547425350
  },
  "id": 420037357,
  "name": "Salt Lake City",
  "cod": 200
}


it("calls fetch with correct url", ()=>{
  const fakeFetch = url =>{
    expect(url).toBe("https://api.openweathermap.org/data/2.5/weather?zip=84102,us&appid=7627d7cba3754868f117fb69ac6d5bdc")
    return new Promise(function(resolve){
    })
  }
  model.fetchResponse(fakeFetch, "84102")
})

it("Check city name from the respponse", (done)=>{
  const fakeFetch = url => {
    return Promise.resolve({
      json: () => Promise.resolve(fakeData)
    })
  }
  model.fetchResponse(fakeFetch, "84102")
    .then(result => {
      expect(result.name).toBe("Salt Lake City")
    })
    done();
})

jest.mock('@/components/request');

it('test mock module', () => {
  return model.requestResponse("84102")
    .then(result => {
      expect(result.name).toBe("Salt Lake City")
    })
});

describe("Kelvin to Farenhite converter", function() {
 it("should convert Kelvin temperature to Farenhit", function() {
   expect(model.convertToFarenhite(270)).toBe(26);
 })
})


export default function request(url){
  return Promise.resolve({
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
  })
}

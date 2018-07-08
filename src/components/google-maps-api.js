import googleMapsApiKey from 'google-maps-api-key';

const baseUrl = "https://maps.googleapis.com/maps/api"
const baseGeocodeUrl = baseUrl + "/geocode/json?&key=" + googleMapsApiKey

// paid api, eventually would set it up to automatically obtain zip code
export const getZipCode = (coords) => {
    let apiString = baseGeocodeUrl + "&latlng=" + coords.latitude+"," + coords.longitude + "&sensor=true"
    let self = this

    axios.get(apiString)
      .then((response) => {
        console.log(response)

        //go through response.data and get zipcode from information
      })
      .catch((error) => console.log(error))
  }
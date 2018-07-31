import { GOOGLE_MAPS_KEY } from 'api-keys';

const baseUrl = "https://maps.googleapis.com/maps/api"
const baseGeocodeUrl = baseUrl + "/geocode/json?&key=" + GOOGLE_MAPS_KEY;

// paid api, eventually would set it up to automatically obtain zip code
export const getZipCode = coords => {
  const apiString = baseGeocodeUrl + "&latlng=" + coords.latitude+"," + coords.longitude + "&sensor=true";

  axios.get(apiString)
  .then(response => {
    console.log("getZipCode response", response)
    //go through response.data and get zipcode from information
  })
  .catch(error => console.log(error));
}

import { DOE_KEY } from "./api-keys";

export const doeApiOptions = {
  apiKey: DOE_KEY,
  status: ["all", "E", "P", "T"], // E = open, P = Planned, T = Temp unavail
  ev_network: ["all",
    "AeroVironment Network",
    "Blink Network",
    "ChargePoint Network",
    "EV Connect",
    "eVgo Network",
    "GE WattStation",
    "Greenlots",
    "OpConnect",
    "SemaCharge Network",
    "Tesla"],
  ev_charging_level: ["all", "1", "2", "dc_fast", "legacy"],
  ev_connector_type: ["all", "NEMA515", "NEMA520", "NEMA1450", "J1772", "CHADEMO", "J1772COMBO", "TESLA"]
};

export const buildApiString = apiOptions => {
  let apiString = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=" + DOE_KEY + "&fuel_type=ELEC&access=public"

  if(apiOptions.limit !== undefined) {
    apiString += "&limit=" + apiOptions.limit
  } else {
    apiString += "&limit=100"
  }
  if(apiOptions.ev_charging_level !== undefined) {
    apiString += "&ev_charging_level=" + apiOptions.ev_charging_level
  }
  if(apiOptions.ev_network !== undefined) {
    apiString += "&ev_network=" + apiOptions.ev_network
  }
  if(apiOptions.status !== undefined) {
    apiString += "&status="+ apiOptions.status
  }
  if(apiOptions.state !== undefined) {
    apiString += "&state=" + apiOptions.state
  }
  if(apiOptions.zip !== undefined) {
    apiString += "&zip=" + apiOptions.zip
  }

  return apiString
};

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import L from "leaflet";
const accessToken =
  "pk.eyJ1IjoiYW5nZWxlcmFzZXIiLCJhIjoiY2toeHhuZ2o2MDd3MTJ4cXFpYW51MGgxNCJ9.yaF6THctuEIX1252_afWZQ";
const id = "ckhxxzt3f1ahj19n28yozqqa0";
const layerUrl = `https://api.mapbox.com/styles/v1/angeleraser/${id}/tiles`;
let geoMap = null;
export const useMap = (coors) => {
  useEffect(() => {
    geoMap = L.map("mapid");
    geoMap.setView(coors, 13);
    L.tileLayer(`${layerUrl}/{z}/{x}/{y}?access_token=${accessToken}`, {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "angeleraser/ckhxxzt3f1ahj19n28yozqqa0",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoiYW5nZWxlcmFzZXIiLCJhIjoiY2toeHhuZ2o2MDd3MTJ4cXFpYW51MGgxNCJ9.yaF6THctuEIX1252_afWZQ",
    }).addTo(geoMap);
    L.marker(coors).addTo(geoMap);
  }, []);
  useEffect(() => {
    geoMap.setView(coors, 13);
    L.marker(coors).addTo(geoMap);
  }, [coors]);
  return [];
};

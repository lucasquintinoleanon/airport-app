import { createContext, useEffect, useState } from "react";
import { getAirports } from "../api/airports";
import { smallDevice } from "../constants";
import { Airport, Center, DataContextData, DataProviderProps } from "../types";
import haversine from "../utils/haversine";
import midpoint from "../utils/midpoint";

const airport: Airport = {
  icao_code: "",
  country_code: "",
  iata_code: "",
  lng: 0,
  name: "",
  lat: 0,
};


export const DataContext = createContext({} as DataContextData);

// CONTEXT THAT PROVIDER ALL INFORMATION FOR THE APP
export function DataProvider({ children }: DataProviderProps) {
  const adjustmentZoom = smallDevice ? 2 : 0
  const [airportsDefault, setAirportsDefault] = useState<Array<Airport>>([]);
  const [airports, setAirports] = useState<Array<Airport>>([]);
  const [center, setCenter] = useState<Center>({
    lat: 39.8097343,
    lng: -98.5556199,
  });
  const [zoom, setZoom] = useState<number>(4.5 - adjustmentZoom);
  const [start, setStart] = useState<Airport>(airport);
  const [end, setEnd] = useState<Airport>(airport);
  const [distance, setDistance] = useState<number>(0);
  const [map, setMap] = useState<any>();
  const [maps, setMaps] = useState<any>();
  const [polyline, setPolyline] = useState<any>("");

  //FUNCTION THAT SELECT DYNAMICALLY THE ZOOM
  const scaleZoom = (distance: number) => {
    if (3000 < distance) {
      return 4;
    } else if (1000 < distance) {
      return 5;
    } else if (100 < distance) {
      return 6;
    } else if (distance < 100) {
      return 8;
    } else {
      return 4;
    }
  };

  //FUNCTION THAT DRAW A LINE BETWEEN THE AIRPORTS
  const drawFlightPath = () => {
    if (polyline) {
      polyline.setMap(null);
    }

    let flightPath = new maps.Polyline({
      path: [
        { lat: start.lat, lng: start.lng },
        { lat: end.lat, lng: end.lng },
      ],
      geodesic: true,
      strokeColor: "yellow",
      strokeOpacity: 1.0,
      strokeWeight: 3,
    });

    flightPath.setMap(map);

    setPolyline(flightPath);
  };

  //FUNCTION THAT CALCULE THE DISTANCE/CENTER/ZOOM
  const getMetrics = (start: Airport, end: Airport) => {
    const options = {
      unit: "nmi",
      threshold: 1,
    };
    let distance = Math.round(haversine(start, end, options)),
      newCenter = midpoint(start, end),
      zoom = scaleZoom(distance);

    return { distance, newCenter, zoom };
  };

  //FUNCTION THAHT CACULE AND SET THE STATES
  const handleCalculate = () => {
    if (start.icao_code && end.icao_code) {
      const { distance, newCenter, zoom } = getMetrics(start, end);
      setAirports([start, end]);
      setDistance(distance);
      setCenter({ lat: newCenter[0], lng: newCenter[1] });
      setZoom(zoom - adjustmentZoom);
      drawFlightPath();
    }
  };

  //FUNCTION THAT RESET THE MAP TO DEFAULT
  const handleReset = () => {
    setAirports([]);
    polyline.setMap(null);
    setDistance(0);
    setPolyline(null);
    setCenter({
      lat: 39.8097343,
      lng: -98.5556199,
    });
    setZoom(4.5 - adjustmentZoom);
    setStart(airport);
    setEnd(airport);
  };

  //ON LOAD SET THE AIRPORTS TO AUTOCOMPLETE
  useEffect(() => {
    const onLoad = async () => {
      const res = await getAirports();
      setAirportsDefault(res?.data?.response);
    };
    onLoad();
  }, []);


  //ON CHANGE THE AIRPORT SELECT
  useEffect(() => {
    polyline && polyline?.setMap(null);
    setPolyline(null);
    let newAirportStart = start || airport;
    let newAirportEnd = end || airport;
    setAirports([newAirportStart, newAirportEnd]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, end]);

  return (
    <DataContext.Provider
      value={{
        airports,
        airportsDefault,
        center,
        zoom,
        start,
        end,
        distance,
        setAirports,
        setStart,
        setEnd,
        setMap,
        setMaps,
        setCenter,
        setZoom,
        handleReset,
        handleCalculate,
        getMetrics
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

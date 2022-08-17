import { createContext, ReactNode, useEffect, useState } from "react";
import { getAirports } from "../api/airports";
import haversine from "../utils/haversine";
import midpoint from "../utils/midpoint";

export type Airport = {
  icao_code: string;
  country_code: string;
  iata_code: string;
  lng: number;
  name: string;
  lat: number;
};

type DataContextData = {
  airports: Array<Airport>;
  center: Center;
  zoom: number;
  distance: number;
  start: Airport;
  end: Airport;
  setStart: (start: Airport) => void;
  setEnd: (end: Airport) => void;
  setMap: (value: any) => void;
  setMaps: (value: any) => void;
  handleCalculate: () => void;
};

type DataProviderProps = {
  children: ReactNode;
};

type Center = {
  lat: number;
  lng: number;
};

const airport: Airport = {
  icao_code: "",
  country_code: "",
  iata_code: "",
  lng: 0,
  name: "",
  lat: 0,
};

export const DataContext = createContext({} as DataContextData);

export function DataProvider({ children }: DataProviderProps) {
  const [airports, setAirports] = useState<Array<Airport>>([]);
  const [center, setCenter] = useState<Center>({
    lat: 39.8097343,
    lng: -98.5556199,
  });
  const [zoom, setZoom] = useState<number>(3);
  const [start, setStart] = useState<Airport>(airport);
  const [end, setEnd] = useState<Airport>(airport);
  const [distance, setDistance] = useState<number>(0);
  const [map, setMap] = useState<any>();
  const [maps, setMaps] = useState<any>();
  const [polyline, setPolyline] = useState<any>("");

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

  const handleCalculate = () => {
    console.log('start', start)
    if (start.icao_code && end.icao_code) {
      const options = {
        unit: "nmi",
        threshold: 1,
      };
      console.log("se", start, end);

      let distance = Math.round(haversine(start, end, options)),
        newCenter = midpoint(start, end),
        zoom = scaleZoom(distance);

      setAirports([start, end]);
      setDistance(distance);
      setCenter({ lat: newCenter[0], lng: newCenter[1] });
      setZoom(zoom);
      drawFlightPath();
      console.log("distance", distance);
      console.log("newCenter", newCenter);
      console.log("zoom", zoom);
    }
  };

  useEffect(() => {
    const onLoad = async () => {
      const res = await getAirports();
      setAirports(res?.data?.response);
    };
    onLoad();
  }, []);

  return (
    <DataContext.Provider
      value={{
        airports,
        center,
        zoom,
        start,
        end,
        distance,
        setStart,
        setEnd,
        setMap,
        setMaps,
        handleCalculate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

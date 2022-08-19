import { ReactNode } from 'react';
export type Airport = {
  icao_code: string;
  country_code: string;
  iata_code: string;
  lng: number;
  name: string;
  lat: number;
};

export type AutoCompleteProp = {
  label: string;
  onSelect: any;
  value: Airport;
};


export type MarkerProp = {
  text: string;
  lat: number;
  lng: number;
};

export type DataContextData = {
  airports: Array<Airport>;
  airportsDefault: Array<Airport>;
  center: Center;
  zoom: number;
  distance: number;
  start: Airport;
  end: Airport;
  setAirports: (airports: Array<Airport>) => any;
  setStart: (start: Airport) => void;
  setEnd: (end: Airport) => void;
  setMap: (value: any) => void;
  setMaps: (value: any) => void;
  setCenter: (value: Center) => void;
  setZoom: (value: number) => void;
  getMetrics: (start: Airport, end: Airport) => any;
  handleCalculate: () => void;
  handleReset: () => void;
};

export type DataProviderProps = {
  children: ReactNode;
};

export type Center = {
  lat: number;
  lng: number;
};
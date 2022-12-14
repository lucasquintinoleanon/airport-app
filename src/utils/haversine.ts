
// https://github.com/njj/haversine with ES6 syntax

import { Airport } from "../types"

const haversine = (start: Airport, end: Airport, options: any) => {

  const toRad = (num: number) => num * Math.PI / 180

  const radii: any = {
    km:    6371,
    mile:  3960,
    meter: 6371000,
    nmi:   3440
  }

  const R = options.unit in radii ? radii[options.unit] : radii.km

  let dLat = toRad(end.lat - start.lat),
      dLon = toRad(end.lng - start.lng),
      lat1 = toRad(start.lat),
      lat2 = toRad(end.lat)

  let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2)
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))

  if (options.threshold && options.threshold > (R * c)) {
      return options.threshold
  }

  return R * c
}

export default haversine

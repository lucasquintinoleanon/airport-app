// http://www.movable-type.co.uk/scripts/latlong.html
// Math is hard

const midpoint = (start, end) => {

  const toRad = (num) => num * Math.PI / 180;
  const toDeg = (rad) => rad / (Math.PI / 180);

  let dLon = toRad(end.lng - start.lng),
      lon1 = toRad(start.lng),
      lat1 = toRad(start.lat),
      lat2 = toRad(end.lat),
      Bx = Math.cos(lat2) * Math.cos(dLon),
      By = Math.cos(lat2) * Math.sin(dLon);

    let latMid = Math.atan2( Math.sin(lat1) + Math.sin(lat2),
                             Math.sqrt( (Math.cos(lat1) + Bx) * (Math.cos(lat1) + Bx) + By*By ) );
    let lonMid = (lon1 + Math.atan2(By, Math.cos(lat1) + Bx));

    let newLat = toDeg(latMid),
        newLon = toDeg(lonMid);

    return [ newLat, newLon ]
}

export default midpoint



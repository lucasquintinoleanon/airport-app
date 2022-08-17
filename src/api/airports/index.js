import API from '../api';

export const getAirports = () => API.get(`/airports?api_key=${process.env.REACT_APP_AIPORTS_API_KEY}&country_code=US`);
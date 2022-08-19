import API from '../api';

//GET ALL AIRPORTS FROM USA
export const getAirports = () => API.get(`/airports?api_key=${process.env.REACT_APP_AIPORTS_API_KEY}&country_code=US`);
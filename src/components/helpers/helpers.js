import axios from 'axios';


export const fetchAllRates = async () => {
 const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
 const rates =  response.data.rates;
 return rates;
  };

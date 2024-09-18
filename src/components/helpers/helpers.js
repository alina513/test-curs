import axios from 'axios';

export const fetchRatesUsd = async () => {
  const response = await axios.get(
    'https://api.exchangerate-api.com/v4/latest/USD'
  );
  const rates = response.data.rates;
  return rates;
};

export const fetchRatesEur = async () => {
    const response = await axios.get(
      'https://api.exchangerate-api.com/v4/latest/EUR'
    );
    const rates = response.data.rates;
    return rates;
  };
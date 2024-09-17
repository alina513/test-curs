import React, { useState, useEffect } from 'react';
import { fetchAllRates } from 'components/helpers/helpers';

const CurrencyConverter = () => {
  const [rates, setRates] = useState({});
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('UAH');

  // Fetching the rates once the component mounts
  useEffect(() => {
    (async () => {
      const fetchedRates = await fetchAllRates();
      setRates(fetchedRates);
    })();
  }, []); // Викликати тільки один раз при завантаженні компоненту

  const convertAmount1 = (newAmount1) => {
    if (Object.keys(rates).length !== 0) {
      const rate = rates[currency2] / rates[currency1]; // Коректне співвідношення валют
      setAmount2((newAmount1 * rate).toFixed(2));
    }
  };

  const convertAmount2 = (newAmount2) => {
    if (Object.keys(rates).length !== 0) {
      const rate = rates[currency1] / rates[currency2]; // Коректне співвідношення валют
      setAmount1((newAmount2 * rate).toFixed(2));
    }
  };

  // Викликати перетворення для amount1 при кожній зміні currency1 або currency2
  useEffect(() => {
    convertAmount1(amount1);
  }, [amount1, currency1, rates]);
  useEffect(() => {
    convertAmount2(amount2);
  }, [amount2, currency2, rates]);

  
  return (
    <div className="converter">
      <h2>Currency Converter</h2>
      <div className="converter-section">
        <input
          type="number"
          value={amount1}
          onChange={(e) => setAmount1(e.target.value)}
        />
        <select
          value={currency1}
          onChange={(e) => setCurrency1(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
        </select>
      </div>

      <div className="converter-section">
        <input
          type="number"
          value={amount2}
          onChange={(e) => setAmount2(e.target.value)}
        />
        <select
          value={currency2}
          onChange={(e) => setCurrency2(e.target.value)}
        >
          <option value="UAH">UAH</option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </select>
      </div>
    </div>
  );
};

export default CurrencyConverter;

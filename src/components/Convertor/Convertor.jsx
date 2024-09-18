import React, { useState, useEffect } from 'react';
import { fetchRatesUsd } from 'components/helpers/helpers';

const Converter = () => {
  const [coin1, setCoin1] = useState('USD');
  const [coin2, setCoin2] = useState('UAH');
  const [rates, setRates] = useState({});
  const [value1, setValue1] = useState(0.0);
  const [value2, setValue2] = useState(0.0);

  useEffect(() => {
    (async () => {
      const fetchedRates = await fetchRatesUsd();
      setRates(fetchedRates);
    })();
  }, []);

  useEffect(() => {
    if (Object.keys(rates).length !== 0 && !isNaN(value1) && !isNaN(value2)) {
      let rate;
      let converted;

      if (value1 !== '') {
        rate = rates[coin2] / rates[coin1];
        converted = (value1 * rate).toFixed(2);
        if (converted !== value2) {
          setValue2(converted);
        }
      } else if (value2 !== '') {
        rate = rates[coin1] / rates[coin2];
        converted = (value2 * rate).toFixed(2);
        if (converted !== value1) {
          setValue1(converted);
        }
      }
    }
  }, [value1, value2, coin1, coin2, rates]);

  return (
    <div className="conteiner">
      <h3>Enter the amount and currency for conversion</h3>
      <div className="converter-section">
        <input
          type="number"
          value={value1}
          onChange={e => setValue1(e.target.value)}
        />
        <select value={coin1} onChange={e => setCoin1(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
        </select>
      </div>

      <div className="converter-section">
        <input
          type="number"
          value={value2}
          onChange={e => setValue2(e.target.value)}
        />
        <select value={coin2} onChange={e => setCoin2(e.target.value)}>
          <option value="UAH">UAH</option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </select>
      </div>
    </div>
  );
};

export default Converter;

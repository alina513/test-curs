// import React, { useState, useEffect } from 'react';
// import { fetchAllRates } from 'components/helpers/helpers';

// const CurrencyConverter = () => {
//   const [rates, setRates] = useState({});
//   const [amount1, setAmount1] = useState(0);
//   const [amount2, setAmount2] = useState(0);
//   const [currency1, setCurrency1] = useState('USD');
//   const [currency2, setCurrency2] = useState('UAH');
//   const currencies = ['USD', 'EUR', 'UAH'];

//   useEffect(() => {
//     (async () => {
//       const rates = await fetchAllRates();
//       setRates(rates);
//     })();
//   }, []);
  

//   const convertAmount1 = (amount1, currency1, currency2) => {
//     const rate = rates[currency2] / rates[currency1];
//     setAmount2((amount1 * rate).toFixed(2));
//   };

//   const convertAmount2 = (amount2, currency2, currency1) => {
//     const rate = rates[currency1] / rates[currency2];
//     setAmount1((amount2 * rate).toFixed(2));
//   };

//   useEffect(() => {
//     if (Object.keys(rates).length > 0) {
//       convertAmount1(amount1, currency1, currency2);
//     }
//   }, [amount1, currency1, currency2]);

//   useEffect(() => {
//     if (Object.keys(rates).length > 0) {
//       convertAmount2(amount2, currency2, currency1);
//     }
//   }, [amount2, currency1, currency2]);

//   return (
//     <div className="converter">
//       <h2>Currency Converter</h2>
//       <div className="converter-section">
//         <input
//           type="number"
//           value={amount1}
//           onChange={(e) => setAmount1(e.target.value)}
//         />
//         <select
//           value={currency1}
//           onChange={(e) => setCurrency1(e.target.value)}
//         >
//           {currencies.map((currency) => (
//             <option key={currency} value={currency}>
//               {currency}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="converter-section">
//         <input
//           type="number"
//           value={amount2}
//           onChange={(e) => setAmount2(e.target.value)}
//         />
//         <select
//           value={currency2}
//           onChange={(e) => setCurrency2(e.target.value)}
//         >
//           {currencies.map((currency) => (
//             <option key={currency} value={currency}>
//               {currency}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default CurrencyConverter;



import React, { useState, useEffect } from 'react';
import { fetchAllRates } from 'components/helpers/helpers';

const CurrencyConverter = () => {
  const [rates, setRates] = useState({});
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('UAH');
  const currencies = ['USD', 'EUR', 'UAH'];

  // Fetching the rates once the component mounts
  useEffect(() => {
    (async () => {
      const fetchedRates = await fetchAllRates();
      setRates(fetchedRates);
    })();
  }, []);

  // Function to handle conversion
  const convertAmount1 = (newAmount1) => {
    const rate = rates[currency2] / rates[currency1];
    setAmount2((newAmount1 * rate).toFixed(2));
  };

  const convertAmount2 = (newAmount2) => {
    const rate = rates[currency1] / rates[currency2];
    setAmount1((newAmount2 * rate).toFixed(2));
  };

  // Trigger conversion when amount1, currency1, or currency2 changes
  useEffect(() => {
    if (Object.keys(rates).length > 0) {
      convertAmount1(amount1);
    }
  }, [amount1]);

  // Trigger conversion when amount2, currency2, or currency1 changes
  useEffect(() => {
    if (Object.keys(rates).length > 0) {
      convertAmount2(amount2);
    }
  }, [amount2, currency2, currency1, rates]);

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
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
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
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencyConverter;

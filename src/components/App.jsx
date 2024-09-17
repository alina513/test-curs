import React from 'react';
import  toast, { Toaster } from 'react-hot-toast';
import CurrencyConverter from './Convertor/Convertor';
export const App = () => {
    return (
      <div
        style={{
          height: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <CurrencyConverter></CurrencyConverter>
        <Toaster/>
      </div>
    );
  }


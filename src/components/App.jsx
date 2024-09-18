import React from 'react';
import Converter from './Convertor/Convertor';
import Header from './Header/Header';
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
      <Header></Header>
      <Converter></Converter>
    </div>
  );
};

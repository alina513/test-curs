import React, { useState, useEffect } from 'react';
import { fetchRatesUsd } from 'components/helpers/helpers';
import {
  Container,
  Wrapper,
  Title,
  Input,
  Select,
  WrapperInput,
} from './Convertor.styled';

const Converter = () => {
  const [coin1, setCoin1] = useState('USD');
  const [coin2, setCoin2] = useState('UAH');
  const [rates, setRates] = useState({});
  const [value1, setValue1] = useState(0.0);
  const [value2, setValue2] = useState(0.0);
  const [isValue1Changing, setIsValue1Changing] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      const fetchedRates = await fetchRatesUsd();
      setRates(fetchedRates);
    };
    fetchRates();
  }, []);

  useEffect(() => {
    if (Object.keys(rates).length !== 0 && !isNaN(value1) && !isNaN(value2)) {
      let rate;
      let converted;

      if (isValue1Changing) {
        rate = rates[coin2] / rates[coin1];
        converted = (value1 * rate).toFixed(2);
        if (converted !== value2) {
          setValue2(converted);
        }
      } else {
        rate = rates[coin1] / rates[coin2];
        converted = (value2 * rate).toFixed(2);
        if (converted !== value1) {
          setValue1(converted);
        }
      }
    }
  }, [value1, value2, coin1, coin2, rates, isValue1Changing]);

  const handleValue1Change = e => {
    setValue1(e.target.value);
    setIsValue1Changing(true);
  };

  const handleValue2Change = e => {
    setValue2(e.target.value);
    setIsValue1Changing(false);
  };

  return (
    <Container>
      <Title>Enter the amount and currency for conversion</Title>
      <Wrapper>
        <WrapperInput>
          <Input type="number" value={value1} onChange={handleValue1Change} />
          <Select value={coin1} onChange={e => setCoin1(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="UAH">UAH</option>
          </Select>
        </WrapperInput>

        <WrapperInput>
          <Input type="number" value={value2} onChange={handleValue2Change} />
          <Select value={coin2} onChange={e => setCoin2(e.target.value)}>
            <option value="UAH">UAH</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </Select>
        </WrapperInput>
      </Wrapper>
    </Container>
  );
};

export default Converter;

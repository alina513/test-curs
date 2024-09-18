import { useState, useEffect } from 'react';
import { fetchRatesUsd, fetchRatesEur } from '../helpers/helpers';
import { Container, Rate } from './Header.styled';
const Header = () => {
  const [ratesUsd, setRatesUsd] = useState({});
  const [ratesEur, setRatesEur] = useState({});
  useEffect(() => {
    (async () => {
      const fetchedRatesUsd = await fetchRatesUsd();
      setRatesUsd(fetchedRatesUsd);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const fetchedRatesEur = await fetchRatesEur();
      setRatesEur(fetchedRatesEur);
    })();
  }, []);

  return (
    <Container>
      <Rate>1USD:{ratesUsd.UAH}</Rate>
      <Rate>1EUR:{ratesEur.UAH}</Rate>
    </Container>
  );
};
export default Header;

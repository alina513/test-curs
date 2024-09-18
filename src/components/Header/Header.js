import { useState, useEffect } from "react";
import { fetchRatesUsd, fetchRatesEur } from "../helpers/helpers";
 const Header = () => {
   const [ratesUsd, setRatesUsd] = useState({});
   const [ratesEur, setRatesEur] = useState({})
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

    return(
        <>
        <p>1USD:{ratesUsd.UAH}</p>
        <p>1EUR:{ratesEur.UAH}</p>
        </>
    )
}
export default Header;
import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://openexchangerates.org/api/latest.json?app_id=007af7f12fcf4c3e9c24f6193f2c207c`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.rates);
        console.log("Rates for:", currency, res.rates);
      })
      .catch((err) => console.error("API error:", err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;

import { useEffect, useState } from "react";
import { coinContext } from "./CoinContext";
import axios from "axios";

const CoinProvider = ({ children }) => {
  const [coinList, setCoinList] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false";
  useEffect(() => {
    const getCoinList = async () => {
      try {
        const res = await axios.get(url);
        setCoinList(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCoinList();
  }, []);
  const { Provider } = coinContext;

  return <Provider value={coinList}>{children}</Provider>;
};

export default CoinProvider;

import { CoinInfo } from "../components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
export default withPageAuthRequired(function getCoin() {
  const [coinInfo, setCoinInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { coin } = router.query;

  useEffect(() => {
    const getCoinInfo = async () => {
      try {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coin}`
        );
        setCoinInfo(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getCoinInfo();
  }, [loading]);
  return <CoinInfo props={coinInfo} />;
});

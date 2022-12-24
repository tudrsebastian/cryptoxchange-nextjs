import Link from "next/link";
import { useContext, useState } from "react";
import { coinContext } from "../CoinContext/CoinContext";
import { AiOutlineStar } from "react-icons/ai";
import { useUser } from "@auth0/nextjs-auth0/client";

const Coins = ({ onAdd }) => {
  const coinsList = useContext(coinContext);
  const { user } = useUser();
  const onClick = (coin) => {
    if (!user) {
      alert("Please Sign In to add to favorites");
    } else {
      onAdd(coin);
    }
  };
  return (
    <div className="border rounded shadow-2xl container mx-auto w-4/6 px-24">
      <div className="flex justify-between mx-4 mt-10 px-12 ">
        <p>#</p>
        <p>Name</p>
        <p>Price</p>
        <p>Price Change</p>
        <p>Market Cap</p>
      </div>
      {coinsList.map((coin) => {
        return (
          <div
            className="hover:scale-105 ease-in-out duration-150 flex justify-between shadow-lg shadow-slate-600 dark:shadow-slate-100 my-12 mx-4 px-12 "
            key={coin.id}
          >
            <span>{coin.market_cap_rank}</span>
            <div className="flex gap-4">
              <button onClick={() => onClick(coin)}>
                <AiOutlineStar color="orange" />
              </button>
              <Link className="flex gap-2 " href={`/${coin.id}`}>
                <img src={coin.image} width={30} />
                <span>{coin.name}</span>
              </Link>
            </div>
            <span>{coin.current_price} € </span>
            <span>{coin.price_change_percentage_24h.toFixed(2)}%</span>
            <span>{coin.market_cap}€</span>
          </div>
        );
      })}
    </div>
  );
};

export default Coins;

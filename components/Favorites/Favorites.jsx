import { useEffect, useState } from "react";

const Favorites = ({ props }) => {
  return (
    <div>
      {props.map((fav) => {
        return (
          <div className="flex justify-between border my-2" key={fav.id}>
            <div className="flex">
              <img src={fav.image} width={25} />
              <span>{fav.name}</span>
            </div>
            <span>#{fav.market_cap_rank}</span>
            <span>{fav.market_cap_change_percentage_24h}%</span>
          </div>
        );
      })}
    </div>
  );
};
export default Favorites;

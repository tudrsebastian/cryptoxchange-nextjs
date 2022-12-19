const Coins = ({ coinsList }) => {
  console.log(coinsList);
  return (
    <div className="border rounded shadow-2xl  lg:mx-72">
      <div className="flex">
        <p>#</p>
        <p className="ml-20">Name</p>
        <p className="2xl:ml-72 pl-12 sm:ml-36 sm:pl-0">Price</p>
        <p className="2xl:ml-72 sm:ml-40">High 24h</p>
        <p className="2xl:ml-72 2xl:pl-24 xl:ml-62 xl:pl-12 md:pl-12 md:ml-12 sm:pl-0 ">
          Low 24h
        </p>
      </div>
      {coinsList.map((coin) => {
        return (
          <div
            className="flex shadow-lg shadow-slate-600 dark:shadow-slate-100 my-12 "
            key={coin.id}
          >
            <span className="mr-10">{coin.market_cap_rank}</span>
            <div className="flex 2xl:mr-40 sm:mr-16 w-40 ">
              <img className="mr-4" src={coin.image} width={30} />
              <span>{coin.name}</span>
            </div>
            <span className="2xl:ml-10 sm:ml-0 sm:mr-4">
              {coin.current_price}
            </span>
            <span className="2xl:ml-64 sm:ml-24">{coin.high_24h}</span>
            <span className="2xl:ml-96 md:ml-28 sm:ml-12">{coin.low_24h}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Coins;

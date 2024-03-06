import React from "react";

function CarouselCard({ coin }) {
  return (
    <div className="border border-black bg-red-600 rounded-lg m-2 p-5 py-7  flex items-center flex-col">
      <div className="flex gap-2 w-full items-center ">
        <img
          src={coin.small}
          alt={coin.name}
          className="h-[30px] rounded-full"
        />
        <h1 className="font-medium">{coin.name}</h1>
        <p> {coin.data.price_change_percentage_24h.inr.toFixed(2)}</p>
      </div>
      <h1 className="text-xl font-semibold w-full m-2">{coin.data.price}</h1>
      <img src={coin.data.sparkline} alt={coin.name} className="w-[200px]" />
    </div>
  );
}

export default CarouselCard;

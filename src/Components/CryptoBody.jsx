import React, { useEffect, useState, useRef } from "react";
import useAxios from "../Hooks/useAxios";
import CarouselCard from "./CarouselCard";

function CryptoBody() {
  const [data, setData] = useState([]);
  const { response } = useAxios("coins/list?include_platform=true");
  const container = useRef();

  const settingData = () => {
    if (response) {
      setData(response.coins);
      console.log(data);
    }
  };

  useEffect(() => {
    settingData();
  }, [response]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
            "width": "610",
            "height": "610",
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "hide_legend": true,
          "allow_symbol_change": true,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);

    return () => {
      container.current.removeChild(script);
    };
  }, []); 

  return (
    <div className="bg-white h-[200vh] rounded-lg">
        {/* Trading view chart  */}
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
        <div className="tradingview-widget-copyright">
          <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
            <span className="blue-text">Track all markets on TradingView</span>
          </a>
        </div>
      </div>

      <div>
        <h1 className="font-semibold text-xl mb-3 ml-2">You May Also Like</h1>
        <div className="flex">
          {data?.map((coin) => (
            <CarouselCard key={coin.id} coin={coin.item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CryptoBody;

import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import { MdArrowRightAlt } from "react-icons/md";

function CryptoTrending() {
  const [data, setData] = useState([]);
  const { response } = useAxios("search/trending");

  const settingData = () => {
    if (response) {
      setData(response.coins);
    }
  };

  useEffect(() => {
    settingData();
  }, []); 

  return (
    <div>
      <div className="bg-violet-500  m-3 rounded-lg text-white p-10 flex items-center flex-col">
        <h1 className="text-2xl md:text-4xl font-semibold text-center">
          Get Started with konix for free
        </h1>
        <p className="font-light px-3 py-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          facilis alias, vitae magni, quae cum repudiandae beatae voluptatem
          aliquam delectus, adipisci 
        </p>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/dating-apps-9735818-7923912.png?f=webp"
          alt="vector image"
          className="w-[150px] md:w-[200px] "
        />
        <button className="bg-white rounded-lg px-10 py-3 text-black font-semibold flex items-center gap-2">
            Get Started For Free <MdArrowRightAlt className="text-xl"/>
        </button>
      </div>

      <div className="bg-white p-3 py-5 rounded-lg m-3">
        <h1 className="font-semibold text-xl mb-3 ml-2">Trending Coins (24hrs)</h1>
        {data?.slice(0, 3).map((coin) => (
          <div
            key={coin.item.id}
            className="flex gap-3 items-center justify-between mb-3 w-full px-3"
          >
            <div className="flex gap-1 items-center">
              <img
                src={coin.item.small}
                alt={coin.item.name}
                className="w-[35px] rounded-full"
              />
              <div className="flex gap-1">
                <h1>{coin.item.name}</h1>
                <h1>({coin.item.symbol})</h1>
              </div>
            </div>
            <div>
              <h2>
                {coin.item.data.price_change_percentage_24h.inr.toFixed(2)}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CryptoTrending;

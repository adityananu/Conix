import { useEffect, useState } from "react";
import axios from 'axios';

function useAxios(param) {
  const [response, setResponse] = useState(null); // Initialize response as null
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (param) => {
    try {
      const result = await axios.get(`https://api.coingecko.com/api/v3/${param}`);
      setResponse(result.data);
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchDataWithParam = async () => {
      setLoading(true);
      await fetchData(param);
    };

    fetchDataWithParam();
  }, [param]);

  return {
    response,
    loading,
    error,
  };
}

export default useAxios;

import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://sensors-docs.bgs.ac.uk/';
export const FETCH_URL = {
  FEATURES: `${BASE_URL}/features`,
  SENSORS: `${BASE_URL}/features/:featureId/sensors`,
  OBSERVATIONS: `${BASE_URL}/sensors/:sensorId/observations`,
};

// TODO: Type res and error
export const useFetch = (url: string, options?: object) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(url, options);
        setData(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, loading, error };
};

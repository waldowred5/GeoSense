import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://sensors.bgs.ac.uk/FROST-Server/v1.1';
export const FETCH_URL = {
  FEATURES: `${BASE_URL}/FeaturesOfInterest`,
  SENSORS: `${BASE_URL}/FeaturesOfInterest/:featureId/sensors`,
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

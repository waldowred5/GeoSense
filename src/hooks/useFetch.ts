import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

const BASE_URL = 'https://sensors.bgs.ac.uk/FROST-Server/v1.1';

interface ValidationError {
  message: string;
  errors: Record<string, string[]>
}

export const useFetch = (url: string, options?: object) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | Error | AxiosError >(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(`${BASE_URL}${url}`, options);
        setData(res.data.value); // TODO: Type res
      } catch (error) {
        if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
          console.log(error.status)

          setError(error);
        } else {
          // Future Improvement: Do something more meaningful with errors here
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, loading, error };
};

export const useGetFeatures = () => {
  return useFetch('/FeaturesOfInterest');
}

export const useGetObservations = (sensorId: string) => {
  return useFetch(`/FeaturesOfInterest(${sensorId})/Observations`);
}

export const useGetSensors = (featureId: string) => {
  return useFetch(`/FeaturesOfInterest/${featureId}/sensors`);
}

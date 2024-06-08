import { useState, useEffect } from 'react';

const BASE_URL = 'https://sensors.bgs.ac.uk/FROST-Server/v1.1';

export const useFetch = (url: string, options?: RequestInit) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BASE_URL}${url}`, options);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();
        setData(json.value);
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

export const useGetFeatures = () => {
  return useFetch('/FeaturesOfInterest');
}

export const useGetObservations = (sensorId: string) => {
  // TODO: Put a guard here if sensorId is empty
  return useFetch(`/FeaturesOfInterest(${sensorId})/Observations`);
}

export const useGetSensors = (featureId: string) => {
  return useFetch(`/FeaturesOfInterest/${featureId}/sensors`);
}

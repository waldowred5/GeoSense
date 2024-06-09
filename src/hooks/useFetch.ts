import { useState, useEffect } from 'react';
import { buildUrlWithParams } from "../api/utils.ts";

const BASE_URL = 'https://sensors.bgs.ac.uk/FROST-Server/v1.1';

export const useFetch = (url: string, options?: RequestInit) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);

        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const json = await res.json();
        setData(json.value || json);
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
  const url = buildUrlWithParams(`${BASE_URL}/FeaturesOfInterest`, { '$filter': "feature/type eq 'Point'" });
  const response = useFetch(url);

  if (response.error) {
    console.log('Error loading features:', response.error);
  }

  if (response.loading) {
    return {
      ...response,
      data: null,
    };
  }

  // TODO: Type this response
  const sortedResponseData = response.data.sort((a: any, b: any) => {
    if (`${a.name} - ${a['@iot.id']}` < `${b.name} - ${b['@iot.id']}`) {
      return -1;
    }
    if (`${a.name} - ${a['@iot.id']}` > `${b.name} - ${b['@iot.id']}`) {
      return 1;
    }

    return 0;
  });

  return { ...response, data: sortedResponseData };
};

export const useGetObservationsByFeature = (url: string) => {
  // return useFetch(url);

  // TODO: Implement sorting of observations
  const response = useFetch(url);

  if (response.error) {
    console.log('Error loading observations:', response.error);
  }

  if (response.loading) {
    return {
      ...response,
      data: null,
    };
  }

  // TODO: Type this response
  const sortedResponseData = response.data.sort((a: any, b: any) => {
    return a['@iot.id'] - b['@iot.id'];
  });

  return { ...response, data: sortedResponseData };
};

export const useGetObservationsBySensor = (url: string) => {
  return useFetch(url);
};

export const useGetSensors = (featureId: string) => {
  return useFetch(`/FeaturesOfInterest/${featureId}/sensors`);
};

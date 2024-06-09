export const BASE_URL = 'https://sensors.bgs.ac.uk/FROST-Server/v1.1';

export const buildUrlWithParams = (baseUrl: string, params: { [key: string]: string | number | boolean }) => {
  const url = new URL(baseUrl);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key].toString()));

  return url.toString();
};

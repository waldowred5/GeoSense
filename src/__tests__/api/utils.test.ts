import { BASE_URL, buildUrlWithParams } from "../../api/utils.ts";

describe('api utils', () => {
  it('should correctly build url with params', () => {
    const params = {
      foo: 'bar',
      baz: 123,
      qux: true,
    };

    const url = buildUrlWithParams(BASE_URL, params);

    expect(url).toBe('https://sensors.bgs.ac.uk/FROST-Server/v1.1?foo=bar&baz=123&qux=true');
  });

  it('should correctly build url without params', () => {
    const url = buildUrlWithParams(BASE_URL);

    expect(url).toBe('https://sensors.bgs.ac.uk/FROST-Server/v1.1');
  });
});

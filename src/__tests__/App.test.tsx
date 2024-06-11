import App from "../App.tsx";
import { render } from "@testing-library/react";

describe('App', () => {
  it('should render', () => {
    render(<App />);
    expect(document.body).toHaveTextContent('GeoSense:');
  });
});

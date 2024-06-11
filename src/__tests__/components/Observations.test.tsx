import { observationsDataFixtureRealExample } from "../../__fixtures__/observationsDataFixtures.ts";
import { Observations } from "../../components/Observations.tsx";
import { render } from "@testing-library/react";

describe('Observations', () => {
  it('should render a canvas element when there are observations', () => {
    render(<Observations observationsData={observationsDataFixtureRealExample} isLoading={false} chartTheme={'light'} />);
    expect(document.body.querySelector('canvas')).toBeInTheDocument();
  });

  it('should render default content when there are no observations', () => {
    render(<Observations observationsData={[]} isLoading={false} chartTheme={'light'} />);
    expect(document.body).toHaveTextContent('No data available');
  });
});

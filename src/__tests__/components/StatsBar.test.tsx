import { StatsBar } from "../../components/StatsBar.tsx";
import { render } from "@testing-library/react";
import {
  observationsDataFixtureMinimalExample1,
  observationsDataFixtureMinimalExample2,
  observationsDataFixtureRealExample
} from "../../__fixtures__/observationsDataFixtures.ts";

describe('StatsBar', () => {
  it('should render default content when observationsData is empty', () => {
    render(<StatsBar observationsData={[]} observationsCount={0} observationsLoading={false} />);
    expect(document.body).toHaveTextContent('DATA POINTS: --');
    expect(document.body).toHaveTextContent('MIN: --');
    expect(document.body).toHaveTextContent('MAX: --');
    expect(document.body).toHaveTextContent('MEAN: --');
  });

  it('should render content with observations data', () => {
    render(<StatsBar observationsData={observationsDataFixtureRealExample} observationsCount={123456} observationsLoading={false} />);
    expect(document.body).toHaveTextContent('DATA POINTS: 123456');
    expect(document.body).toHaveTextContent('MIN: 4.38');
    expect(document.body).toHaveTextContent('MAX: 17.94');
    expect(document.body).toHaveTextContent('MEAN: 8.82');
  });

  it('should render the same number of decimal places for mean value as min value', () => {
    render(<StatsBar observationsData={observationsDataFixtureMinimalExample1} observationsCount={123456} observationsLoading={false} />);
    expect(document.body).toHaveTextContent('MEAN: 2.3');
  });

  it('should render no decimal places if min value has no decimal places', () => {
    render(<StatsBar observationsData={observationsDataFixtureMinimalExample2} observationsCount={123456} observationsLoading={false} />);
    expect(document.body).toHaveTextContent('MEAN: 2');
  });

  it('should render default content when observations are loading', () => {
    render(<StatsBar observationsData={[]} observationsCount={0} observationsLoading={true} />);
    expect(document.body).toHaveTextContent('DATA POINTS: --');
    expect(document.body).toHaveTextContent('MIN: --');
    expect(document.body).toHaveTextContent('MAX: --');
    expect(document.body).toHaveTextContent('MEAN: --');
  });
});

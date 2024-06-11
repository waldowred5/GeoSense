import { DatastreamSelect } from "../../components/DatastreamSelect.tsx";
import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTestQueryClient } from "../../test/setup.ts";
import { DatastreamsByFeature } from "../../types.ts";
import { observationsRawDataResponseFixture } from "../../__fixtures__/observationsDataFixtures.ts";
import { datastreamsByFeatureFixture } from "../../__fixtures__/datastreamsByFeatureFixtures.ts";
import { userEvent } from "@testing-library/user-event";

type Context = {
  queryClient: QueryClient;
  datastreams: DatastreamsByFeature;
  selectedFeature: string;
  setObservationsData: () => void;
  setObservationsCount: () => void;
  setObservationsLoading: () => void;
};

describe('DatastreamSelect', () => {
  beforeEach( (context: Context) => {
    context.queryClient = createTestQueryClient();
    context.datastreams = {};
    context.selectedFeature = '';
    context.setObservationsData = vi.fn();
    context.setObservationsCount = vi.fn();
    context.setObservationsLoading = vi.fn();
  });

  it('should render', (
    {
      queryClient,
      datastreams,
      selectedFeature,
      setObservationsData,
      setObservationsCount,
      setObservationsLoading,
   }: Context
  ) => {
    render(
      <QueryClientProvider client={queryClient}>
        <DatastreamSelect
          datastreams={datastreams}
          selectedFeature={selectedFeature}
          setObservationsData={setObservationsData}
          setObservationsCount={setObservationsCount}
          setObservationsLoading={setObservationsLoading}
        />
      </QueryClientProvider>
    );

    expect(screen.getByText('...then select a Datastream')).toBeInTheDocument();
  });

  it('should successfully fetch observation data', async (
    {
      queryClient,
      setObservationsCount,
      setObservationsLoading,
    }: Context
  ) => {
    const selectedFeature = '37';
    const setObservationsData = vi.fn().mockImplementation(() => {});

    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(observationsRawDataResponseFixture),
      })
    );

    render(
      <QueryClientProvider client={queryClient}>
        <DatastreamSelect
          datastreams={datastreamsByFeatureFixture}
          selectedFeature={selectedFeature}
          setObservationsData={setObservationsData}
          setObservationsCount={setObservationsCount}
          setObservationsLoading={setObservationsLoading}
        />
      </QueryClientProvider>
    );

    const selectControl = screen.getByRole('combobox');
    expect(selectControl.children.length).toBe(3);

    const value = JSON.stringify({ id: 1, url:"https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(1)/Observations" });
    const text = 'Barometric Pressure from BGS GGERFS Barometer - Measured (mbar)';
    await userEvent.selectOptions(screen.getByTestId('datastream-select'), value);
    expect((screen.getByText(text)).selected).toBeTruthy();

    expect(setObservationsCount).toHaveBeenCalledWith(18432);
    await waitFor(() => expect(setObservationsLoading).toHaveBeenCalledTimes(2));
    await waitFor(() => expect(setObservationsData).toHaveBeenCalledTimes(1));
  });
});

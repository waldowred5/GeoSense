import { DatastreamSelect } from "../../components/DatastreamSelect.tsx";
import { render, screen } from "@testing-library/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { createTestQueryClient } from "../../test/setup.ts";

describe('DatastreamSelect', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    const queryClient = createTestQueryClient();

    const datastreams = {};
    const selectedFeature = '';
    const setObservationsData = vi.fn();
    const setObservationsCount = vi.fn();
    const setObservationsLoading = vi.fn();

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
  });

  it('should render', () => {
    expect(screen.getByText('...then select a Datastream')).toBeInTheDocument();
  });

  // it('
});

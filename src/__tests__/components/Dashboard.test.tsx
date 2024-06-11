import { Dashboard } from "../../components/Dashboard.tsx";
import { render, waitFor } from "@testing-library/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { createTestQueryClient } from "../../test/setup.ts";

describe('Dashboard', () => {
  it('should successfully render Dashboard', () => {
    const queryClient = createTestQueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    );
  });

  it('should build a map of features and their associated datastreams', async () => {
    const queryClient = createTestQueryClient();

    // (global as any).fetch = vi.fn(() =>
    //   Promise.resolve({
    //     ok: true,
    //     json: () => Promise.resolve({ message: 'Hello, World!' }),
    //   })
    // );

    render(
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    );

    // await waitFor(() => expect(screen.getByText('Hello, World!')).toBeInTheDocument());
  });
});

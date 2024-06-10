import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Dashboard } from "./components/Dashboard.tsx";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard />
    </QueryClientProvider>
  );
};

export default App;

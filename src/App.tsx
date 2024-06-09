import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Dashboard } from "./components/Dashboard.tsx";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard />
    </QueryClientProvider>
  );
};

export default App;

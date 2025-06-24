import ReactDOM from 'react-dom';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.reander(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>,
    document.getElementById('root')
);
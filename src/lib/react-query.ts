import { QueryClient, DefaultOptions } from 'react-query';

const queryConfig: DefaultOptions = {
    queries: {
        useErrorBoundary: true,
        refetchOnWindowFocus: false,
        retry: false,
        refetchOnMount: false,
    },
};

const queryClient = new QueryClient({ defaultOptions: queryConfig });

export default queryClient;

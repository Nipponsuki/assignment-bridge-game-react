import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query-devtools';
import { QueryClientProvider } from 'react-query';

import Routes from 'routes/Routes';
import GlobalStyles from 'styles/GlobalStyles';
import queryClient from 'lib/react-query';

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <GlobalStyles />
                <Routes />
                <ReactQueryDevtools />
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default App;

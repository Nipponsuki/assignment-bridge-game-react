import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import HomePage from 'pages/home/HomePage';
import Header from 'components/Header/Header';
import LoginPage from 'pages/login/LoginPage';
import NoMatch from 'pages/404/404';
import useAuth from 'stores/auth';
import PrivateRoute from 'utils/PrivateRoute/PrivateRoute';

const ContentWrapper = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Routes: React.FC = () => {
    const { user } = useAuth((state) => state);
    return (
        <>
            <Header />
            <ContentWrapper>
                <Switch>
                    <PrivateRoute
                        allowVisit={!user}
                        component={LoginPage}
                        path="/login"
                        redirectTo="/"
                    />
                    <PrivateRoute
                        allowVisit={!!user}
                        component={HomePage}
                        path="/"
                        redirectTo="/login"
                    />

                    <Route path="*" component={NoMatch} />
                </Switch>
            </ContentWrapper>
        </>
    );
};

export default Routes;

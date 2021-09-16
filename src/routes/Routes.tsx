import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import HomePage from 'pages/home/HomePage';
import Header from 'components/Header/Header';
import LoginPage from 'pages/login/LoginPage';
import NoMatch from 'pages/404/404';

const ContentWrapper = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Routes: React.FC = () => {
    return (
        <>
            <Header />
            <ContentWrapper>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="*" component={NoMatch} />
                </Switch>
            </ContentWrapper>
        </>
    );
};

export default Routes;

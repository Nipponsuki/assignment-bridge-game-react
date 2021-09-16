import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'pages/home/HomePage';
import Header from 'components/Header/Header';
import styled from 'styled-components';
import LoginPage from 'pages/login/LoginPage';

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
                </Switch>
            </ContentWrapper>
        </>
    );
};

export default Routes;

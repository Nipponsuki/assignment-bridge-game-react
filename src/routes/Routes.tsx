import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'pages/home/HomePage';
import Header from 'components/Header/Header';
import styled from 'styled-components';

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
                </Switch>
            </ContentWrapper>
        </>
    );
};

export default Routes;

import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'pages/home/HomePage';
import Header from 'components/Header/Header';

const Routes: React.FC = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
        </>
    );
};

export default Routes;

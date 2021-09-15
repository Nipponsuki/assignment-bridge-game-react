import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'pages/home/HomePage';

const Routes: React.FC = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
        </>
    );
};

export default Routes;

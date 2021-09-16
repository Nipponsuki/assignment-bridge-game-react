import * as React from 'react';

import { Link, useLocation } from 'react-router-dom';

const NoMatch: React.FC = () => {
    const location = useLocation();

    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
            <Link to="/">Proceed to home page</Link>
        </div>
    );
};

export default NoMatch;

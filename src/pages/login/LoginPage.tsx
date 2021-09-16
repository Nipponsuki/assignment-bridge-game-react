/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import styled from 'styled-components';

import LoginForm from 'components/LoginForm/LoginForm';

const PageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80vh;
`;

const LoginPage: React.FC = () => {
    return (
        <PageWrapper>
            <LoginForm />
        </PageWrapper>
    );
};

export default LoginPage;

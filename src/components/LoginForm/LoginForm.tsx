/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import useAuth from 'stores/auth';
import { useHistory } from 'react-router';

interface IFormInput {
    name: string;
    password: string;
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1.8rem;
`;

const StyledInput = styled.input`
    border: 1px solid #000000;
    border-radius: 5px;
    width: 30rem;
    height: 4rem;
    padding: 1rem;
    margin: 0;

    &:focus {
        outline: none;
        border-color: var(--primaryColor);
    }
`;

const StyledLabel = styled.label``;
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
    color: #d0312d;
    font-size: 1.4rem;
    position: absolute;
    bottom: -1.7rem;
`;

const FormHeading = styled.h2`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
`;

const SumbitButton = styled.button`
    border: none;
    border-radius: 5px;
    width: 30rem;
    height: 5rem;
    background-color: var(--primaryColor);
    color: #ffffff;
    cursor: pointer;
    margin-top: 0.5rem;
    font-size: 2rem;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:disabled {
        opacity: 0.5;
        pointer-events: none;
        cursor: not-allowed;
    }

    &:hover {
        background-color: #207567;
    }
`;

const LoginForm: React.FC = () => {
    const history = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<IFormInput>();

    const { login } = useAuth((state) => state);

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        login(data.name);
        reset();
        history.push('/');
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <FormHeading>Sign In to your account</FormHeading>
            <InputWrapper>
                <StyledLabel htmlFor="name">Name</StyledLabel>
                <StyledInput
                    {...register('name', { required: true, pattern: /^admin$/ })}
                    id="name"
                    type="text"
                />
                <ErrorMessage>{errors.name && '???????????????? ??????'}</ErrorMessage>
            </InputWrapper>
            <InputWrapper>
                <StyledLabel htmlFor="password">Password</StyledLabel>
                <StyledInput
                    {...register('password', { required: true, pattern: /^123456$/ })}
                    type="password"
                />
                <ErrorMessage>{errors.password && '???????????????? ????????????'}</ErrorMessage>
            </InputWrapper>

            <SumbitButton type="submit" disabled={isSubmitting}>
                Submit
            </SumbitButton>
        </StyledForm>
    );
};

export default LoginForm;

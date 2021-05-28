import React, { FC, useContext } from 'react';
import { Redirect } from 'react-router';
import { LoginForm } from '../../component/Login';
import { AppContext } from '../../state';
// import './index.css';
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
` 
const H1 = styled.h1`
 margin-bottom: 0px;
`
const Section = styled.section`
  width: 300px;
`
export const LoginPage: FC = () => {
  const { state } = useContext(AppContext);

  return (
    <Main className="login-page">
      <H1>Login</H1>
      <Section className="login-form">
        {state.isLogin ? <Redirect to="/home"></Redirect> : <LoginForm></LoginForm>}
      </Section>
    </Main>
  );
};

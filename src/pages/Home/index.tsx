import React, { FC, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { UserForm } from '../../component/UserForm';
import { AppContext } from '../../state';
// import './index.css';
import { NavBar } from '../../component/Navbar';
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
` 
const Section = styled.section`
  width: 300px;
`
export const HomePage: FC = () => {
  const { state } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    console.log(state.isLogin);
    if(!state.isLogin) history.push('/')
  })

  return (
    <Main className="login-page">
      <NavBar />
      <h1>User Info</h1>
      <Section className="login-form" style={{ width: 300 }}>
        <UserForm></UserForm>
      </Section>
    </Main>
  );
};

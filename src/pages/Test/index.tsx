import React, { FC, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { AuthService } from '../../service/auth';
import { AppContext } from '../../state';
// import './index.css';
import { NavBar } from '../../component/Navbar';
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
` 
export const Test: FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const history = useHistory();

  const onLogout = () =>
    AuthService.logout().then(() => dispatch({ type: 'LOGOUT', payload: null }));

  useEffect(() => {
    if(!state.isLogin) history.push('/');
    if(state.user.age === undefined || state.user.email === undefined || state.user.username === undefined) history.push('/home');
  })

  return (
    <>
      <NavBar />
      <Main className="login-page pt-5">
          <h4>{'Username : ' + state.user.username}</h4>
          <h4>{'Email : ' + state.user.email}</h4>
          <h4>{'Age : ' + state.user.age}</h4>
          <div>
            <button type="button" className="btn btn-primary btn-lg" onClick={ onLogout }>
              Logout
            </button>
          </div>
      </Main>
    </>
  );
};

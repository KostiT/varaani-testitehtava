import React, { FC, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { UserForm } from '../../component/UserForm';
import { GlobalStateContext } from '../../state';
import './index.css';

export const HomePage: FC = () => {
  const { state } = useContext(GlobalStateContext);
  const history = useHistory();

  useEffect(() => {
    console.log(state.isLogin);
    if(!state.isLogin) history.push('/')
  })

  return (
    <main className="login-page">
      <h1>User Info</h1>

      <section className="login-form" style={{ width: 300 }}>
        <UserForm></UserForm>
      </section>
    </main>
  );
};

import React, { FC, useContext } from 'react';
import { useHistory } from 'react-router';
import { LoginKey, useLoginForm } from '../../model/login';
import { AuthService } from '../../service/auth';
import { AppContext } from '../../state';

export const LoginForm: FC = () => {
  const { register, errors, handleSubmit } = useLoginForm();
  const { dispatch } = useContext(AppContext);
  const history = useHistory();

  const onSubmit = handleSubmit(data =>
    AuthService.login(data)
      .then(user => dispatch({ type: 'LOGIN', payload: user }))
      .then(() => history.push('/'))
      .catch(() => alert('Username or Password Error')),
  );

  return (
    <div className="row col-12 mt-5 pt-5">
      <form className="login-form form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">User Name:</label>
          <input style = {{width: '143%'}} type="text" className="form-control" name={LoginKey.username} ref={register} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Password:</label>
          <input style = {{width: '143%'}} type="password" className="form-control" name={LoginKey.password} ref={register} />
        </div>

        <div className="form__control">
          <button type="submit" className="btn btn-primary">Log In</button>
        </div>
      </form>
    </div>
  );
};

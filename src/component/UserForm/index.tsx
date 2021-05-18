import React, { FC, useContext } from 'react';
import { useHistory } from 'react-router';
import { useUserForm } from '../../model/login';
import { AuthService } from '../../service/auth';
import { GlobalStateContext } from '../../state';

export const UserForm: FC = () => {
  const { register, handleSubmit } = useUserForm();
  const { state } = useContext(GlobalStateContext);
  const history = useHistory();

  const onSubmit = handleSubmit((data) => {
        console.log(data);
        state.user.username = data.username;
        state.user.email = data.email;
        state.user.age = data.age;
        history.push('/next');
    });

  return (
    <form className="login-form form" onSubmit={onSubmit}>
      {/* <div className="form__control">
        <label>
          <span>User Name</span>
          <input type="text" name="username" ref={register} />
        </label>
      </div> */}

      <div className="form-group">
        <label htmlFor="username">User Name:</label>
        <input type="text" className="form-control" name="username" ref={register} />
      </div>

      <div className="form-group">
        <label htmlFor="username">Email:</label>
        <input type="text" className="form-control" name="email" ref={register} />
      </div>

      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input type="text" className="form-control" name="age" ref={register} />
      </div>

      {/* <div className="form__control">
        <label>
          <span>Email</span>
          <input type="email" name="email" ref={register} />
        </label>
      </div>

      <div className="form__control">
        <label>
          <span>Age</span>
          <input type="number" name="age" ref={register} />
        </label>
      </div> */}

      <div className="form__control">
        <button type="submit" className="btn btn-primary">Next</button>
      </div>
    </form>
  );
};

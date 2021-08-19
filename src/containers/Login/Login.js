import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/actions/usersActions';
import FormItem from '../../components/UI/FormItem/FormItem';
import UserForm from '../../components/UserForm/UserForm';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
  alert: {
    width: '100%',
  },
}));

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const error = useSelector((state) => state.users.loginError);

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    await dispatch(loginUser({ ...state }));
  };

  return (
    <UserForm title='Войти' onSubmit={submitFormHandler} buttonText='Войти'>
      {error && (
        <Alert severity='error' className={classes.alert}>
          <AlertTitle>Error</AlertTitle>
          {error.response.data.detail}
        </Alert>
      )}
      <Grid item xs={12}>
        <FormItem name='email' value={state.email} onChange={inputChangeHandler} label='Почта' />
      </Grid>
      <Grid item xs={12}>
        <FormItem name='password' value={state.password} onChange={inputChangeHandler} label='Пароль' type='password' />
      </Grid>
    </UserForm>
  );
};

export default Login;

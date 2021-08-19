import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
    color: 'inherit',
  },
  btn: {
    marginRight: 10,
  },
}));

const Header = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.users.user);

  return (
    <Grid container justifyContent='space-between' direction='row'>
      <Grid container item xs={9}>
        <Button component={Link} to='/' color='inherit' className={classes.btn}>
          Главная
        </Button>
        <Button component={Link} to='/basket' color='inherit' className={classes.btn}>
          Корзина
        </Button>
      </Grid>
      <Grid item>
        <Typography variant='h6' className={classes.logo}>
          CONCEPT
        </Typography>
      </Grid>
      <Grid item>
        <SearchBar />
      </Grid>
      <Grid item>
        {user ? (
          <>
            <Typography>Hello, user</Typography>
            <Button color='inherit' className={classes.menuButton}>
              Выйти
            </Button>
          </>
        ) : (
          <>
            <Button to='/login' component={Link} color='inherit' className={classes.menuButton}>
              Войти
            </Button>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default Header;

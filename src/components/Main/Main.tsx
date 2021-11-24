import { Container } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  container: {
    marginTop: '20px',
  },
}));

const Main: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Switch></Switch>
    </Container>
  );
};

export default Main;

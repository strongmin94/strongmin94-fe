import type { NextPage } from 'next';
import React from 'react';
import Header from '../layouts/header';
import withNotLoggedIn from '../hocs/withNotLoggedIn';
import LoginContainer from '../modules/login/container/loginContainer';

const LoginPage: NextPage = () => {
  return (
    <>
      <Header />
      <LoginContainer />
    </>
  );
};

export default withNotLoggedIn(LoginPage);

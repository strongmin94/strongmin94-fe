import Link from 'next/link';
import type { NextPage } from 'next';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from '../components/input';
import { passwordRegex, userIdRegex } from '../utilities/regex';

const LoginPage: NextPage = () => {
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorUserId, setErrorUserId] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<string>('');

  const onBlurUserId = useCallback(() => {
    if (userId) {
      setErrorUserId(!userId.match(userIdRegex) ? '올바른 아이디 형식으로 입력해주세요.' : '');
    }
  }, [userId]);

  const onBlurPassword = useCallback(() => {
    if (password) {
      setErrorPassword(
        !password.match(passwordRegex) ? '올바른 비밀번호 형식으로 입력해주세요.' : ''
      );
    }
  }, [password]);

  return (
    <>
      <Header>
        <Link href='/'>
          <Title>HAUS</Title>
        </Link>
        <Link href='/login'>
          <p>login</p>
        </Link>
      </Header>
      <Form>
        <Input
          title='아이디'
          value={userId}
          onChange={setUserId}
          errorInfo={errorUserId}
          onBlur={onBlurUserId}
        />
        <Input
          type='password'
          title='비밀번호'
          value={password}
          onChange={setPassword}
          errorInfo={errorPassword}
          onBlur={onBlurPassword}
        />
        <LoginButton disabled={!userId || !password || !!errorUserId || !!errorPassword}>
          로그인
        </LoginButton>
      </Form>
    </>
  );
};

export default LoginPage;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Title = styled.a`
  font-size: 48px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 0 20px 40px;
`;

const LoginButton = styled.button`
  margin-top: 40px;
  padding: 20px;
  border-radius: 12px;
  background-color: #222;
  color: #fff;

  &:disabled {
    background-color: #e2e2ea;
  }
`;

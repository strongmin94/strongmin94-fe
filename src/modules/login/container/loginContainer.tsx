import styled from "styled-components";
import Input from "../../../components/input";
import useLoginContainer from "../hooks/useLogin";

const LoginContainer = () => {
  const {
    isLoading,
    userId,
    setUserId,
    password,
    setPassword,
    errorUserId,
    errorPassword,
    isDisabled,
    onBlurUserId,
    onBlurPassword,
    onSubmit,
  } = useLoginContainer();

  return (
    <Form onSubmit={onSubmit}>
      <InputWrapper>
        <Input
          label='아이디'
          id='userId'
          value={userId}
          onChange={setUserId}
          onBlur={onBlurUserId}
          errorInfo={errorUserId}
          required={true}
        />
        <Input
          type='password'
          label='비밀번호'
          id='password'
          value={password}
          onChange={setPassword}
          onBlur={onBlurPassword}
          errorInfo={errorPassword}
          required={true}
        />
      </InputWrapper>
      <LoginButton type='submit' disabled={isLoading || isDisabled} value='로그인' />
    </Form>
  )
}

export default LoginContainer;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 0 20px 40px;
`;

const InputWrapper = styled.div`
  display  : flex;
  flex-direction: column;
  gap: 16px;
`;

const LoginButton = styled.input`
  margin-top: 40px;
  padding: 20px;
  border-radius: 12px;
  background-color: #222;
  color: #fff;

  &:disabled {
    background-color: #e2e2ea;
  }
`;
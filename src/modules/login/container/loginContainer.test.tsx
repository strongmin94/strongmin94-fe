import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import LoginContainer from './loginContainer';

describe('login form test', () => {
  it('렌더링 테스트', () => {
    render(
      <Provider store={store}>
        <LoginContainer />
      </Provider>
    );

    const userIdInput = screen.getByLabelText(/아이디/i);
    const passwordInput = screen.getByLabelText(/비밀번호/i);
    const submitButton = screen.getByText(/로그인/i);

    expect(userIdInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('아이디 유효성 체크', async () => {
    render(
      <Provider store={store}>
        <LoginContainer />
      </Provider>
    );

    const userIdInput = screen.getByLabelText(/아이디/i);
    await userEvent.type(userIdInput, 'abcd');
    await userEvent.click(document.body);

    const userIdError = screen.getByText(/올바른 아이디 형식으로 입력해주세요./i);
    expect(userIdError).toBeInTheDocument();
  });

  it('비밀번호 유효성 체크', async () => {
    render(
      <Provider store={store}>
        <LoginContainer />
      </Provider>
    );

    const passwordInput = screen.getByLabelText(/비밀번호/i);
    await userEvent.type(passwordInput, 'abcd123123');
    await userEvent.click(document.body);

    const userIdError = screen.getByText(/올바른 비밀번호 형식으로 입력해주세요./i);
    expect(userIdError).toBeInTheDocument();
  });

  // test('로그인 기능 테스트', async () => {
  //   render(
  //     <Provider store={store}>
  //       <LoginContainer />
  //     </Provider>
  //   );

  //   const userIdInput = screen.getByLabelText(/아이디/i);
  //   const passwordInput = screen.getByLabelText(/비밀번호/i);
  //   const submitButton = screen.getByText(/로그인/i);

  //   await userEvent.type(userIdInput, 'strongmin94');
  //   await userEvent.type(passwordInput, 'Aa123123');
  //   await userEvent.click(submitButton);

  //   await waitFor(() => {
  //     screen.getByText('logout');
  //   });
  // });
});

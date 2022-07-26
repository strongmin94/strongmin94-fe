import { useRouter } from "next/router";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { requestUserInfo } from "../../../redux/userInfoSlice";
import { passwordRegex, userIdRegex } from "../../../utilities/regex";

const useLogin = () => {
  const router = useRouter();
  const { isLoading } = useAppSelector(state => state.userInfo);
  const dispatch = useAppDispatch();
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorUserId, setErrorUserId] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    setIsDisabled(!userId.match(userIdRegex) || !password.match(passwordRegex));
  }, [userId, password]);

  const onBlurUserId = useCallback(() => {
    if (userId) {
      setErrorUserId(!userId.match(userIdRegex) ? '올바른 아이디 형식으로 입력해주세요.' : '');
    }
  }, [userId]);

  const onBlurPassword = useCallback(() => {
    if (password) {
      setErrorPassword(!password.match(passwordRegex) ? '올바른 비밀번호 형식으로 입력해주세요.' : '');
    }
  }, [password]);

  const onSubmit = useCallback(async (event: FormEvent) => {
    event.preventDefault();
    try {
      await dispatch(requestUserInfo({ userId, password })).unwrap();
      router.push('/');
    } catch (ex: any) {
      console.log(ex);
      alert(ex?.code);
    }
  }, [userId, password]);

  return {
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
  }
}

export default useLogin;
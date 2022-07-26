import { useRouter } from "next/router";
import { ComponentType } from "react";
import { useAppSelector } from "../redux/store";

const withNotLoggedIn = (WrappedComponent: ComponentType) => {
  return ({ ...props }) => {
    const router = useRouter();
    const { user: { accessToken } } = useAppSelector(state => state.userInfo);

    if (accessToken) {
      router.replace('/');
    } else {
      return <WrappedComponent {...props} />
    }
  }
}

export default withNotLoggedIn;


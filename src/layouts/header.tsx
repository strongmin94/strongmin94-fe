import Link from "next/link";
import { useCallback } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { clearUserInfo } from "../redux/userInfoSlice";

const Header = () => {
	const { user: { accessToken, user: { NAME } } } = useAppSelector(state => state.userInfo);
	const dispatch = useAppDispatch();

	const onClickLogout = useCallback(() => {
		dispatch(clearUserInfo());
	}, []);

	return <Container>
		<Link href='/' passHref>
			<Title>HAUS</Title>
		</Link>
		{
			accessToken ?
				<UserInfo>
					<p>{NAME}</p>
					<button onClick={onClickLogout}>logout</button>
				</UserInfo>
				:
				<Link href='/login'>
					<a>login</a>
				</Link>
		}
	</Container>
}

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Title = styled.a`
  font-size: 48px;
`;

const UserInfo = styled.div`
	text-align: end;
`
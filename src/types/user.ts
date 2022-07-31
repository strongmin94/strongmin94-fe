interface IUser {
	ID: string;
	NAME: string;
}

export interface IUserInfo {
  accessToken: string;
	user: IUser;
}

export const defaultUserInfo: IUserInfo = {
	accessToken: "",
	user: {
		ID: "",
		NAME: ""
	}
}

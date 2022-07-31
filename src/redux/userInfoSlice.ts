import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../axios";
import { defaultUserInfo, IUserInfo } from "../types/user";

const sliceName = 'userInfo';

interface IUserInfoState {
	isLoading: boolean;
	user: IUserInfo;
}

const initialState: IUserInfoState = {
	isLoading: false,
	user: defaultUserInfo,
}

export const requestUserInfo = createAsyncThunk(
	`${sliceName}/requestUserInfo`,
	async (params: { userId: string, password: string }) => {
		const response = await axiosInstance.post('/login', {
			id: params.userId,
			password: params.password
		});
		return response.data.data as IUserInfo;
	}
);

const userInfoSlice = createSlice({
  name: 'userInfo',
	initialState,
	reducers: {
		clearUserInfo: () => {
			return initialState;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(requestUserInfo.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(requestUserInfo.fulfilled, (state, action) => {
			state.isLoading = false;
			state.user = action.payload;
		});
		builder.addCase(requestUserInfo.rejected, () => {
			return initialState;
		});
	}
});

export const { clearUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../utlis/types/user.types";

interface UserState {
	user: User | null;
	isAuthorized: boolean;
}

const initialState: UserState = {
	user: null,
	isAuthorized: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateUser: (state, action: PayloadAction<any>) => {
			state.user = { ...state.user, ...action.payload };
		},
		removeUser: (state) => {
			state.user = null;
		},
		setIsAuthorized: (state, action: PayloadAction<boolean>) => {
			state.isAuthorized = action.payload;
		},
	},
});

export const { updateUser, setIsAuthorized, removeUser } = userSlice.actions;

export default userSlice.reducer;

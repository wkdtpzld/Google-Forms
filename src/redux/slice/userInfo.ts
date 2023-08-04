import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface UserInfo {
    id: number;
}

const initialUserInfoState: UserInfo = {
    id: -1,
};

export interface UserState {
    user: UserInfo
}

export const initialState: UserState = {
    user: initialUserInfoState,
};

const userInfoSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserInfo(state, action: PayloadAction<UserInfo>) {
            state.user = action.payload;
        },
        resetUserInfo(state) {
            state.user = initialUserInfoState;
        }
    }
});

export const {setUserInfo, resetUserInfo} = userInfoSlice.actions;

export default userInfoSlice.reducer
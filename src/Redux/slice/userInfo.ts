import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ThemeInfo {
    isDark: boolean;
}

const initialThemeInfoState: ThemeInfo = {
    isDark: false,
};

export interface ThemeState {
    state: ThemeInfo
}

export const initialState: ThemeState = {
    state: initialThemeInfoState,
};

const themeInfoSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme(state) {
            state.state = {isDark: !state.state.isDark}
        },
    }
});

export const {changeTheme} = themeInfoSlice.actions;

export default themeInfoSlice.reducer
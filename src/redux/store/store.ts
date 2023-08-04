import {configureStore} from "@reduxjs/toolkit";
import userInfoSlice, {UserState} from "@/redux/slice/userInfo";

export interface StoreProps {
    user: UserState
}

const store = configureStore({
    reducer: {
        user: userInfoSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;




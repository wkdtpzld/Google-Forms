import {configureStore} from "@reduxjs/toolkit";
import themeInfoSlice, {ThemeState} from "@/Redux/slice/userInfo";

export interface StoreProps {
    theme: ThemeState
}

const store = configureStore({
    reducer: {
        theme: themeInfoSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;




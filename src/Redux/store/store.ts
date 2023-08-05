import {configureStore} from "@reduxjs/toolkit";
import formSlice, {FormState} from "@/Redux/slice/formSlice";

export interface StoreProps {
    formState: FormState
}

const store = configureStore({
    reducer: {
        formState: formSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;




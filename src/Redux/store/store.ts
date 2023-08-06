import {configureStore} from "@reduxjs/toolkit";
import formSlice from "@/Redux/slice/FormSlice/formSlice";
import {FormState} from "@/Redux/slice/FormSlice/formType";
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




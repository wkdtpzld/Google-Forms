import {configureStore} from "@reduxjs/toolkit";
import formSlice from "@/Redux/slice/FormSlice/formSlice";
import {FormState} from "@/Redux/slice/FormSlice/formType";
import modalSlice, {ModalInfo} from "@/Redux/slice/ModalSlice/modalSlice";
export interface StoreProps {
    formState: FormState;
    modalState: ModalInfo;
}

const store = configureStore({
    reducer: {
        formState: formSlice,
        modalState: modalSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;




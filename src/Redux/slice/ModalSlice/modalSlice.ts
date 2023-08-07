import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import React from "react";

type ModalRenderComponentType = React.ReactNode | undefined

export interface ModalInfo {
    visible: boolean;
    bottomButtonComponent?: ModalRenderComponentType;
}

export const InitialModalState: ModalInfo = {
    visible: false,
    bottomButtonComponent: null,

}

const ModalSlice = createSlice({
    name: "Modal",
    initialState: InitialModalState,
    reducers: {
        setModalState(state: ModalInfo, action: PayloadAction<ModalInfo>) {
            state = {...action.payload}
        },
        setModalVisible(state, action: PayloadAction<boolean>) {
            state.visible = action.payload;
        },
        clearModalState(state) {
            state = {...InitialModalState};
        }
    },
});

export const {
    setModalState, clearModalState, setModalVisible
} = ModalSlice.actions;

export default ModalSlice.reducer;

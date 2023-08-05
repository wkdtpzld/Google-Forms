import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface FormHeaderInfo {
    title: string;
    description: string;
}

export interface FormInfo {
    id: number;
    header: FormHeaderInfo;
}

export interface FormState {
    state: FormInfo
}

const initialFormState: FormInfo = {
    id: -1,
    header: {
        title: '제목을 지어주세요.',
        description: '설명을 적어주세요.'
    },
}

const initialState: FormState = {
    state: initialFormState
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        resetForm(state) {
            state.state = initialFormState;
        },
        onChangeForm<T>(state: FormState, action: PayloadAction<T>) {
            state.state = {...state.state, ...action.payload};
        }
    },
});

export const {
    resetForm, onChangeForm
} = formSlice.actions;

export default formSlice.reducer;

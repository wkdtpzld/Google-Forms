import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FormContentInfo, FormContentTypeInfo, FormInfo, FormState} from "@/Redux/slice/FormSlice/formType";

export const initialContentState: FormContentInfo = {
    id: 0,
    type: FormContentTypeInfo.SHORT,
    title: '',
    textQuestion: {
        question: '',
        answer: '',
    }
}

const initialFormState: FormInfo = {
    id: -1,
    header: {
        title: '제목을 지어주세요.',
        description: ''
    },
    content: [initialContentState],
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
        },
        onAppendForm(state: FormState, action: PayloadAction<FormContentInfo[]>) {
            state.state = {...state.state, content: action.payload}
        }
    },
});

export const {
    resetForm, onChangeForm, onAppendForm
} = formSlice.actions;

export default formSlice.reducer;

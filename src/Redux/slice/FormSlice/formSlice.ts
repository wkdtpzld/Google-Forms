import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
    FormContentInfo, FormContentSelectInfo,
    FormContentTextInfo,
    FormContentTypeInfo,
    FormInfo,
    FormState
} from "@/Redux/slice/FormSlice/formType";

export const InitialShortContentState: FormContentTextInfo = {
    answer: '',
}

export const InitialLongContentState: FormContentTextInfo = {
    answer: '',
}

export const InitialMultipleContentState: FormContentSelectInfo[] = [{
    content: '옵션 1', isSelect: false
}];

export const InitialCheckContentState: FormContentSelectInfo[] = [{
    content: '옵션 1', isSelect: false
}]

export const InitialContentState: FormContentInfo = {
    id: 0,
    type: FormContentTypeInfo.SHORT,
    title: '',
    textQuestion: {
        answer: ''
    }
}

const initialFormState: FormInfo = {
    id: -1,
    header: {
        title: '제목을 지어주세요.',
        description: ''
    },
    content: [InitialContentState],
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

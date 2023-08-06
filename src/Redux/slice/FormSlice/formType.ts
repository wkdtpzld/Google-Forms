export interface FormHeaderInfo {
    title: string;
    description: string;
}

export enum FormContentTypeInfo {
    SHORT = 'SHORT',
    LONG = 'LONG',
    MULTIPLE = 'MULTIPLE',
    CHECK = 'CHECK'
}

export interface FormContentTextInfo {
    question: string;
    answer: string;
}

export interface FormContentSelectDetailInfo {
    content: string;
    isSelect: boolean;
}

export interface FormContentSelectInfo {
    question: string;
    answer: FormContentSelectDetailInfo[];
}

export interface FormContentInfo {
    id: number;
    type: FormContentTypeInfo;
    title: string;
    textQuestion?: FormContentTextInfo;
    selectQuestion?: FormContentSelectInfo;
}

export interface FormInfo {
    id: number;
    header: FormHeaderInfo;
    content: FormContentInfo[];
}

export interface FormState {
    state: FormInfo
}
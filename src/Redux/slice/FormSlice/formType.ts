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
    answer: string;
}

export interface FormContentSelectInfo {
    content: string;
    isSelect: boolean;
}

export interface FormContentInfo {
    id: number;
    type: FormContentTypeInfo;
    title: string;
    textQuestion?: FormContentTextInfo;
    selectQuestion?: FormContentSelectInfo[];
    required: boolean;
}

export interface FormInfo {
    id: number;
    header: FormHeaderInfo;
    content: FormContentInfo[];
}

export interface FormState {
    state: FormInfo
}
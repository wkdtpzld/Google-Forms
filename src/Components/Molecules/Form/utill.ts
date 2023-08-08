import {FormContentInfo, FormContentSelectInfo} from "@/Redux/slice/FormSlice/formType";
import {Content} from "@/Components/Molecules/Form/FormContent/Header/FormContentHeader";

export const selectSort = {
    selectQuestion: 'selectQuestion',
} as const;

export type selectType = typeof selectSort[keyof typeof selectSort];

export const iconSort = {
    checkBox: 'checkBox',
    circle: 'circle',
} as const;

export type iconType = typeof iconSort[keyof typeof iconSort];

interface onChangeDefaultProps {
    contents: FormContentInfo[];
    index: number;
    type: string;
}

interface onChangeSelectItemProps extends onChangeDefaultProps {
    content: string
    idx: number;
}

interface createNewContentsProps extends onChangeDefaultProps {
    newSelectList: FormContentSelectInfo[];
}

export const onChangeSelectItem = ({contents, index, idx, type, content}: onChangeSelectItemProps) => {
    const newSelectList: FormContentSelectInfo[] = [
        ...contents[index][type].slice(0, idx),
        {isSelect: false, content},
        ...contents[index][type].slice(idx + 1)
    ];

    return newSelectList;
};
export const createNewContents = ({contents, index, type, newSelectList}:createNewContentsProps) => {
    const newContent: FormContentInfo = {...contents[index], [type]: newSelectList}
    const newContents: Content = {content: [...contents.slice(0, index), newContent, ...contents.slice(index + 1)]};

    return newContents;
}
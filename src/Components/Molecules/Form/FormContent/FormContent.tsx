import React from "react";
import {Pressable, View, ViewProps} from "react-native";
import DefaultInput from "@/Components/Atom/DefaultInput/DefaultInput";
import {useDispatch, useSelector} from "react-redux";
import {StoreProps} from "@/Redux/store/store";
import {COLOR_CODE} from "@/Common/globalStyle";
import Icon from "@/Components/Atom/Icon/Icon";
import {IconMap} from "@/Utils/svg";
import {onChangeForm} from "@/Redux/slice/FormSlice/formSlice";
import {FormContentInfo} from "@/Redux/slice/FormSlice/formType";

interface Content {
    content: FormContentInfo[]
}

interface IProps extends ViewProps {
    onSelect: boolean;
    index: number;
}

const FormContent = ({onSelect, index, ...props}:IProps) => {

    const contents = useSelector((state:StoreProps) => state.formState.state.content);
    const dispatch = useDispatch();

    const onChange = (value: string, name: string) => {
        const newContent = {
            ...contents[index],
            [name]: value,
        };

        const newContents:Content = {content: [...contents.slice(0, index), newContent, ...contents.slice(index + 1)]};
        dispatch(onChangeForm<Content>(newContents));
    }

    return (
        <View {...props}>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 15, paddingVertical: 12}}>
                <DefaultInput
                    value={contents[index].title}
                    style={{backgroundColor: COLOR_CODE.GRAY_150, width: '85%', paddingVertical: 4, paddingHorizontal: 12}}
                    placeholder={'제목'}
                    fontType={"bold3"}
                    onChange={(e) => onChange(e.nativeEvent.text, 'title')}
                />
                <Pressable style={{justifyContent: 'center', width: '15%', alignItems: 'center'}}>
                    <Icon xml={IconMap.meatball} width={24} height={24} fill={COLOR_CODE.BLACK} />
                </Pressable>
            </View>
        </View>
    )
}

export default FormContent;
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
import {styles} from "@/Components/Molecules/Form/style";

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
            <View style={styles.formContentBoxStyle}>
                <View style={styles.formContentTitleStyle}>
                    <DefaultInput
                        value={contents[index].title}
                        placeholder={'제목'}
                        fontType={"medium2"}
                        onChange={(e) => onChange(e.nativeEvent.text, 'title')}
                    />
                </View>
                <Pressable style={styles.formContentMoreButtonBoxStyle}>
                    <Icon xml={IconMap.meatball} width={24} height={24} fill={COLOR_CODE.BLACK} />
                </Pressable>
            </View>
        </View>
    )
}

export default FormContent;
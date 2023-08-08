import React, {useCallback} from "react";
import {Pressable, View} from "react-native";
import {styles} from "@/Components/Molecules/Form/style";
import DefaultInput from "@/Components/Atom/DefaultInput/DefaultInput";
import Icon from "@/Components/Atom/Icon/Icon";
import {IconMap} from "@/Utils/svg";
import {COLOR_CODE} from "@/Common/globalStyle";
import {useDispatch, useSelector} from "react-redux";
import {StoreProps} from "@/Redux/store/store";
import {onChangeForm} from "@/Redux/slice/FormSlice/formSlice";
import {setModalState} from "@/Redux/slice/ModalSlice/modalSlice";
import FormBottomSheetContent from "@/Components/Molecules/Form/FormBottomSheetContent/FormBottomSheetContent";
import {FormContentInfo} from "@/Redux/slice/FormSlice/formType";

interface IProps {
    index: number;
}

export interface Content {
    content: FormContentInfo[]
}

const FormContentHeader = ({index}: IProps) => {

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

    const onClickMoreButton = useCallback((index: number) => {
        dispatch(setModalState({
            visible: true,
            bottomButtonComponent: (
                <FormBottomSheetContent index={index} />
            )
        }));
    }, [index]);

    return (
        <>
            <View style={styles.formContentTitleStyle}>
                <DefaultInput
                    value={contents[index].title}
                    placeholder={'제목'}
                    fontType={"medium2"}
                    onChange={(e) => onChange(e.nativeEvent.text, 'title')}
                />
            </View>
            <Pressable
                style={styles.formContentMoreButtonBoxStyle}
                onPress={() => onClickMoreButton(index)}
            >
                <Icon xml={IconMap.meatball} width={24} height={24} fill={COLOR_CODE.BLACK} />
            </Pressable>
        </>
    )
}

export default FormContentHeader;
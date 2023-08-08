import React, {useCallback} from "react";
import BottomSheetButton from "@/Components/Molecules/Modal/Atom/BottomSheetButton";
import BottomSheetSafeAreaView from "@/Components/Molecules/Modal/Atom/BottomSheetSafeAreaView";
import {useDispatch, useSelector} from "react-redux";
import DefaultText from "@/Components/Atom/DefaultText/DefaultText";
import Icon from "@/Components/Atom/Icon/Icon";
import {IconMap} from "@/Utils/svg";
import Spacing, {ISpacingType} from "@/Components/Atom/Spacing/Spacing";
import {
    InitialCheckContentState,
    InitialLongContentState,
    InitialMultipleContentState,
    InitialShortContentState,
    onChangeForm
} from "@/Redux/slice/FormSlice/formSlice";
import {FormContentInfo, FormContentTypeInfo} from "@/Redux/slice/FormSlice/formType";
import {StoreProps} from "@/Redux/store/store";
import {Content} from "@/Components/Molecules/Form/FormContent/Header/FormContentHeader";
import DeviceEvent from "@/Utils/DeviceEvent";

interface IProps {
    index: number;
}

const FormBottomSheetContent = ({index}: IProps) => {

    const dispatch = useDispatch();
    const content = useSelector((state: StoreProps) => state.formState.state.content);

    const createContent = (content: FormContentInfo[], type: FormContentTypeInfo): FormContentInfo => {
        if (type === FormContentTypeInfo.SHORT) {
            return {
                ...content[index],
                type,
                textQuestion: InitialShortContentState,
                selectQuestion: undefined
            }
        }
        if (type === FormContentTypeInfo.LONG) {
            return {
                ...content[index],
                type,
                textQuestion: InitialLongContentState,
                selectQuestion: undefined
            }
        }
        if (type === FormContentTypeInfo.MULTIPLE) {
            return {
                ...content[index],
                type,
                textQuestion: undefined,
                selectQuestion: InitialMultipleContentState
            }
        }
        if (type === FormContentTypeInfo.CHECK) {
            return {
                ...content[index],
                type,
                textQuestion: undefined,
                selectQuestion: InitialCheckContentState
            }
        }
    }

    const onPressEvent = useCallback((type) => {

        const newContent: FormContentInfo = createContent(content, type);
        const newContentList: FormContentInfo[] = [...content.slice(0, index), newContent, ...content.slice(index + 1)];

        dispatch(onChangeForm<Content>({content: newContentList}));
        DeviceEvent.emit('bottomSheet');

    }, [index]);

    const prefixRenderItem = useCallback((icon) => {
        return (
            <>
                <Icon xml={icon} width={28} height={28} />
                <Spacing size={8} type={ISpacingType.width} />
            </>
        )
    }, []);


    return (
        <BottomSheetSafeAreaView>
            <BottomSheetButton
                separator={true}
                onPress={() => onPressEvent(FormContentTypeInfo.SHORT)}
                prefixComponent={prefixRenderItem(IconMap.shortAnswer)}
            >
                <DefaultText fontType={"semiBold2"}>단답형</DefaultText>
            </BottomSheetButton>
            <BottomSheetButton
                separator={true}
                onPress={() => onPressEvent(FormContentTypeInfo.LONG)}
                prefixComponent={prefixRenderItem(IconMap.longAnswer)}
            >
                <DefaultText fontType={"semiBold2"}>장문형</DefaultText>
            </BottomSheetButton>
            <BottomSheetButton
                separator={true}
                onPress={() => onPressEvent(FormContentTypeInfo.MULTIPLE)}
                prefixComponent={prefixRenderItem(IconMap.circle)}
            >
                <DefaultText fontType={"semiBold2"}>객관식 질문</DefaultText>
            </BottomSheetButton>
            <BottomSheetButton
                onPress={() => onPressEvent(FormContentTypeInfo.CHECK)}
                prefixComponent={prefixRenderItem(IconMap.checkBox)}
            >
                <DefaultText fontType={"semiBold2"}>체크박스</DefaultText>
            </BottomSheetButton>
        </BottomSheetSafeAreaView>
    )
}

export default FormBottomSheetContent;
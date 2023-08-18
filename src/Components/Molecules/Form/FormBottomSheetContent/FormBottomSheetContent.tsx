import React, {useCallback} from "react";
import BottomSheetButton from "@/Components/Molecules/Modal/Atom/BottomSheetButton";
import BottomSheetSafeAreaView from "@/Components/Molecules/Modal/Atom/BottomSheetSafeAreaView";
import {useDispatch, useSelector} from "react-redux";
import DefaultText from "@/Components/Atom/DefaultText/DefaultText";
import Icon from "@/Components/Atom/Icon/Icon";
import {IconMap} from "@/Utils/svg";
import Spacing from "@/Components/Atom/Spacing/Spacing";
import {InitialChangeContentState, onChangeForm} from "@/Redux/slice/FormSlice/formSlice";
import {FormContentInfo, FormContentTypeInfo} from "@/Redux/slice/FormSlice/formType";
import {StoreProps} from "@/Redux/store/store";
import {Content} from "@/Components/Molecules/Form/FormContent/Header/FormContentHeader";
import DeviceEvent from "@/Utils/DeviceEvent";
import {COLOR_CODE} from "@/Common/globalStyle";

interface IProps {
    index: number;
}

const FormBottomSheetContent = ({index}: IProps) => {

    const dispatch = useDispatch();
    const content = useSelector((state: StoreProps) => state.formState.state.content);

    const createContent = (content: FormContentInfo[], type: FormContentTypeInfo): FormContentInfo => {
        return InitialChangeContentState(content, type, index)[type];
    }

    const onPressEvent = useCallback((type) => {

        const newContent: FormContentInfo = createContent(content, type);
        const newContentList: FormContentInfo[] = [...content.slice(0, index), newContent, ...content.slice(index + 1)];

        dispatch(onChangeForm<Content>({content: newContentList}));
        DeviceEvent.emit('bottomSheet');

    }, [index]);

    const prefixRenderItem = useCallback((icon, stroke?: string) => {
        return (
            <>
                <Icon xml={icon} width={28} height={28} stroke={stroke}/>
                <Spacing size={8} type={"width"} />
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
                prefixComponent={prefixRenderItem(IconMap.checkBox, COLOR_CODE.BLACK)}
            >
                <DefaultText fontType={"semiBold2"}>체크박스</DefaultText>
            </BottomSheetButton>
        </BottomSheetSafeAreaView>
    )
}

export default FormBottomSheetContent;
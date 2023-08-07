import React, {useCallback} from "react";
import BottomSheetButton from "@/Components/Molecules/Modal/Atom/BottomSheetButton";
import BottomSheetSafeAreaView from "@/Components/Molecules/Modal/Atom/BottomSheetSafeAreaView";
import {useDispatch} from "react-redux";
import DefaultText from "@/Components/Atom/DefaultText/DefaultText";
import Icon from "@/Components/Atom/Icon/Icon";
import {IconMap} from "@/Utils/svg";
import Spacing, {ISpacingType} from "@/Components/Atom/Spacing/Spacing";

interface IProps {
    index: number;
}

const FormBottomSheetContent = ({index}: IProps) => {

    const dispatch = useDispatch();

    const onPressEvent = useCallback(() => {

    }, []);

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
                onPress={() => {
                    console.log('onPress Button');
                }}
                prefixComponent={prefixRenderItem(IconMap.shortAnswer)}
            >
                <DefaultText fontType={"semiBold2"}>단답형</DefaultText>
            </BottomSheetButton>
            <BottomSheetButton
                separator={true}
                onPress={() => {
                    console.log('onPress Button');
                }}
                prefixComponent={prefixRenderItem(IconMap.longAnswer)}
            >
                <DefaultText fontType={"semiBold2"}>장문형</DefaultText>
            </BottomSheetButton>
            <BottomSheetButton
                separator={true}
                onPress={() => {
                    console.log('onPress Button');
                }}
                prefixComponent={prefixRenderItem(IconMap.circle)}
            >
                <DefaultText fontType={"semiBold2"}>객관식 질문</DefaultText>
            </BottomSheetButton>
            <BottomSheetButton
                onPress={() => {
                    console.log('onPress Button');
                }}
                prefixComponent={prefixRenderItem(IconMap.checkBox)}
            >
                <DefaultText fontType={"semiBold2"}>체크박스</DefaultText>
            </BottomSheetButton>
        </BottomSheetSafeAreaView>
    )
}

export default FormBottomSheetContent;
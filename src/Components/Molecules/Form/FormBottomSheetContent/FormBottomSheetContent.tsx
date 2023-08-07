import React, {useCallback} from "react";
import BottomSheetButton from "@/Components/Molecules/Modal/Atom/BottomSheetButton";
import BottomSheetSafeAreaView from "@/Components/Molecules/Modal/Atom/BottomSheetSafeAreaView";
import {useDispatch} from "react-redux";
import DefaultText from "@/Components/Atom/DefaultText/DefaultText";

interface IProps {
    index: number;
}

const FormBottomSheetContent = ({index}: IProps) => {

    const dispatch = useDispatch();

    const onPressEvent = useCallback(() => {

    }, []);


    return (
        <BottomSheetSafeAreaView>
            <BottomSheetButton
                separator={true}
                onPress={() => {
                    console.log('onPress Button');
                }}
            >
                <DefaultText fontType={"semiBold2"}>단답형</DefaultText>
            </BottomSheetButton>
            <BottomSheetButton
                separator={true}
                onPress={() => {
                    console.log('onPress Button');
                }}
            >
                <DefaultText fontType={"semiBold2"}>장문형</DefaultText>
            </BottomSheetButton>
            <BottomSheetButton
                separator={true}
                onPress={() => {
                    console.log('onPress Button');
                }}
            >
                <DefaultText fontType={"semiBold2"}>객관식 질문</DefaultText>
            </BottomSheetButton>
            <BottomSheetButton
                onPress={() => {
                    console.log('onPress Button');
                }}
            >
                <DefaultText fontType={"semiBold2"}>체크박스</DefaultText>
            </BottomSheetButton>
        </BottomSheetSafeAreaView>
    )
}

export default FormBottomSheetContent;
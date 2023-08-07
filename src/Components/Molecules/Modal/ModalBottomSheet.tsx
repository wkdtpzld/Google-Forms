import React from "react";
import HandleBottomSheetModalProvider from "@/Components/Molecules/Modal/Atom/HandleBottomSheetModalProvider";
import {useDispatch, useSelector} from "react-redux";
import {StoreProps} from "@/Redux/store/store";
import {setModalVisible} from "@/Redux/slice/ModalSlice/modalSlice";
import {IModalBottomProps} from "@/Components/Molecules/Modal/constants";


const ModalBottomSheet = ((
    {
        index = 0,
        snapPoints = ['33%'],
        ...props
    }: IModalBottomProps) => {
    const dispatch = useDispatch();
    const {visible, bottomButtonComponent} = useSelector((state: StoreProps) => state.modalState);

    const onDismiss = () => dispatch(setModalVisible(false));

    return (
        <>
            <HandleBottomSheetModalProvider
                {...props}
                index={index}
                snapPoints={snapPoints}
                visible={visible}
                isScroll={false}
                onDismiss={onDismiss}
            >
                {bottomButtonComponent}
            </HandleBottomSheetModalProvider>
        </>
    )
});

export default ModalBottomSheet;
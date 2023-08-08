import React, {useCallback, useEffect, useMemo, useRef} from "react";
import {
    BottomSheetBackdrop, BottomSheetHandle,
    BottomSheetModal,
    BottomSheetModalProvider
} from "@gorhom/bottom-sheet";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {styles} from "@/Components/Molecules/Modal/styles";
import {Pressable} from "react-native";
import useBackHandlerCallback from "@/Hook/useBackHandlerCallback";
import {IBottomSheetModalProviderProps} from "@/Components/Molecules/Modal/constants";
import DeviceEvent from "@/Utils/DeviceEvent";

const HandleBottomSheetModalProvider = ({
    visible,
    index = 0,
    isScroll = false,
    snapPoints,
    ...props
}:IBottomSheetModalProviderProps) => {
    const bottomSheetSnapPoints = useMemo(() => snapPoints, []);
    const bottomSheetRef = useRef<BottomSheetModal>(null);

    const backdropComponent = useCallback(props => (
        <BottomSheetBackdrop {...props} />
    ), []);

    const back = () => {
        if(visible && bottomSheetRef.current) {
            bottomSheetRef.current.close();
        }
    }
    useBackHandlerCallback(visible, back);

    useEffect(() => {
        if(visible && bottomSheetRef.current) {
            bottomSheetRef.current.present();
        }
    }, [visible]);

    useEffect(() => {
        const isVisible = DeviceEvent.addListener('bottomSheet', () => {
            bottomSheetRef.current.close();
        });

        return () => {
            isVisible.remove();
        }
    }, []);

    return (
        <GestureHandlerRootView
            style={{...styles.screenContainer,
                display: visible ? "flex" : "none",
                width: '100%',
                height: '100%'
            }}
        >
            <BottomSheetModalProvider>
                <Pressable style={styles.bottomContainer} onPress={back}>
                    <BottomSheetModal
                        {...props}
                        ref={bottomSheetRef}
                        index={index}
                        enableContentPanningGesture={isScroll}
                        handleComponent={BottomSheetHandle}
                        snapPoints={bottomSheetSnapPoints}
                        backdropComponent={backdropComponent}
                    >
                        {props.children}
                    </BottomSheetModal>
                </Pressable>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    )
};

export default HandleBottomSheetModalProvider;
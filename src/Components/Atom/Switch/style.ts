import {StyleSheet} from "react-native";
import {COLOR_CODE} from "@/Common/globalStyle";

export const styles = StyleSheet.create({
    switchWrapper: {
        paddingHorizontal: 8
    },
    switch: {
        width: 20,
        height: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.5,
        elevation: 1.5,
        backgroundColor: COLOR_CODE.WHITE
    }
});

export const dynamicStyle = (required: boolean) => StyleSheet.create({
    switchBox: {
        width: 30,
        height: 15,
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: required ? COLOR_CODE.MAIN_DARK : COLOR_CODE.MAIN_LIGHT
    },
});
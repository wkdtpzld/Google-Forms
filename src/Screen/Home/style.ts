import {StyleSheet} from "react-native";
import {COLOR_CODE} from "@/Common/globalStyle";

export const styles = (themeColor) => StyleSheet.create({
    homeWrapper: {
        backgroundColor: themeColor,
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
        height: '100%',
        overflow: 'hidden'
    },
    homeScreen: {flex: 1, backgroundColor: COLOR_CODE.BLACK}
})
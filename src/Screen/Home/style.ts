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
    homeBox: {flexGrow: 1, backgroundColor: themeColor},
    homeScreen: {flex: 1, backgroundColor: COLOR_CODE.BLACK}
})
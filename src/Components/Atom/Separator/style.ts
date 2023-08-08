import {StyleSheet} from "react-native";
import {COLOR_CODE} from "@/Common/globalStyle";

export const styles = StyleSheet.create({
    separatorWidth: {
        borderColor: COLOR_CODE.GRAY_400,
        borderTopWidth: 1
    },
    separatorHeight: {
        borderColor: COLOR_CODE.GRAY_400,
        borderLeftWidth: 1,
        marginHorizontal: 8,
    }
});
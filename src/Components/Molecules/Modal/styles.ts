import {StyleSheet} from "react-native";
import {COLOR_CODE} from "@/Common/globalStyle";

export const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    handleContainer: {
        width: '100%',
        paddingHorizontal: 8,
        paddingVertical: 12,
        justifyContent: "center",
        alignItems: "center"
    },
    handleBar: {
        width: 56,
        height: 5,
        backgroundColor: COLOR_CODE.GRAY_300,
        borderRadius: 4,
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: COLOR_CODE.GRAY_200
    },
    btnContainer: {
        paddingHorizontal: 15,
        paddingVertical: 16,
        alignItems: 'center'
    }
})
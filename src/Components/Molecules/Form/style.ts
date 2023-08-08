import {StyleSheet} from "react-native";
import {COLOR_CODE} from "@/Common/globalStyle";

export const styles = StyleSheet.create({
    formBoxStyle: {
        paddingHorizontal: 16,
        paddingVertical: 12
    },
    formContentBoxStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingVertical: 12
    },
    formContentTitleStyle: {
        backgroundColor: COLOR_CODE.GRAY_150,
        width: '85%',
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 4,
    },
    formContentMoreButtonBoxStyle: {
        justifyContent: 'center',
        width: '15%',
        alignItems: 'center'
    },
    formContentWrapperStyle: {
        paddingHorizontal: 15,
        paddingBottom: 8
    },
    formContentStyle: {
        paddingHorizontal: 8,
        paddingVertical: 12
    },
    formContentRowContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    formContentAppendContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4
    }
});
import {StyleSheet} from "react-native";
import {COLOR_CODE} from "@/Common/globalStyle";
import {FORM_TYPE} from "@/Components/Atom/FormBox/index";

export const styles = StyleSheet.create({
    formBorderStyle: {
        borderWidth: 1,
        width: '100%',
        position: 'absolute',
        borderColor: 'rgba(0,0,0,0.2)',
    },
});

export const dynamicStyle = (themeColor: string, formType: FORM_TYPE) => StyleSheet.create({
    formHeadBorder: {
        backgroundColor: themeColor,
        width: formType === FORM_TYPE.HEADER ? '100%' : 0,
        height: formType === FORM_TYPE.HEADER ? 12 : 0,
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4
    },
    formBoxStyle: {
        backgroundColor: COLOR_CODE.WHITE,
        borderColor: formType === FORM_TYPE.CONTENT ? 'rgba(0,0,0,0.2)' : '',
        borderWidth: formType === FORM_TYPE.CONTENT ? 1 : 0
    },
});
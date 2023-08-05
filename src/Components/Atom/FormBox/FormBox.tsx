import React from "react";
import {StyleProp, View, ViewProps, ViewStyle} from "react-native";
import {dynamicStyle, styles} from "@/Components/Atom/FormBox/styles";
import Spacing, {ISpacingType} from "@/Components/Atom/Spacing/Spacing";
import {useTheme} from "@react-navigation/native";
import {FORM_TYPE} from "@/Components/Atom/FormBox/index";

interface IProps extends ViewProps {
    viewStyle?: StyleProp<ViewStyle>
    minHeight: number;
    borderRadius: number;
    formType: FORM_TYPE
}

const FormBox = ({
    viewStyle = styles.formBoxStyle,
    children,
    borderRadius,
    minHeight,
    formType,
    ...props
}: IProps) => {

    const {color} = useTheme();

    return (
        <>
            <Spacing size={20} type={ISpacingType.height} />
            <View
                {...props}
                style={{...viewStyle, borderRadius, minHeight}}
            >
                <View
                    style={dynamicStyle(color.MAIN_DARK, formType).formHeadBorder}
                />
                <View style={{...styles.formBorderStyle, minHeight, borderRadius}} />
                {children}
            </View>
        </>
    )
}

export default FormBox;
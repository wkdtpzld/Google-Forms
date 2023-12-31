import React from "react";
import {StyleProp, View, ViewProps, ViewStyle} from "react-native";
import {dynamicStyle} from "@/Components/Atom/FormBox/styles";
import Spacing from "@/Components/Atom/Spacing/Spacing";
import {useTheme} from "@react-navigation/native";
import {FORM_TYPE} from "@/Components/Atom/FormBox/index";

interface IProps extends ViewProps {
    viewStyle?: StyleProp<ViewStyle>
    minHeight: number;
    borderRadius: number;
    formType: FORM_TYPE
}

const FormBox = ({
    viewStyle,
    children,
    borderRadius,
    minHeight,
    formType,
    ...props
}: IProps) => {

    const {color} = useTheme();
    const dynamicStyles = dynamicStyle(color.MAIN_DARK, formType);

    return (
        <>
            <Spacing size={20} type={"height"} />
            <View
                {...props}
                style={{borderRadius, minHeight, ...dynamicStyles.formBoxStyle, ...viewStyle}}
            >
                <View
                    style={dynamicStyles.formHeadBorder}
                />
                {children}
            </View>
        </>
    )
}

export default FormBox;
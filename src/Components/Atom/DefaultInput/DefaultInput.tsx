import React from "react";
import {TextInput, TextInputProps, TextStyle} from "react-native";
import {globalFontStyles, GlobalFontTypeValue} from "@/Common/globalFont";
import {COLOR_CODE} from "@/Common/globalStyle";

interface IProps extends TextInputProps {
    fontType: GlobalFontTypeValue;
    fontStyle?: Omit<TextStyle, 'fontSize' | 'fontFamily'>

}

const DefaultInput = ({
    fontType,
    fontStyle,
    ...props
}:IProps) => {

    return (
        <TextInput
            placeholderTextColor={COLOR_CODE.GRAY_400}
            style={{...globalFontStyles[fontType], ...fontStyle}}
            {...props}
        >
            {props.children}
        </TextInput>
    )
}

export default DefaultInput;
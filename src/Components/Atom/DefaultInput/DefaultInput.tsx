import React from "react";
import {TextInput, TextInputProps, TextStyle} from "react-native";
import {globalFontStyles, GlobalFontTypeValue} from "@/Common/globalFont";

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
            {...props}
            style={{...globalFontStyles[fontType], ...fontStyle}}
        >
            {props.children}
        </TextInput>
    )
}

export default DefaultInput;
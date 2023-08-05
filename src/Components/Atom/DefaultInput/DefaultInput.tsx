import React from "react";
import {StyleProp, TextInput, TextInputProps, TextStyle} from "react-native";
import {styles} from "@/Components/Atom/DefaultInput/style";

interface IProps extends TextInputProps {
    textStyle?: StyleProp<TextStyle>;

}

const DefaultInput = ({
    textStyle = styles.fontStyle,
    ...props
}:IProps) => {

    return (
        <TextInput
            {...props}
            style={textStyle}
        >
            {props.children}
        </TextInput>
    )
}

export default DefaultInput;
import React from "react";
import {Text, TextProps, TextStyle} from "react-native";
import {globalFontStyles, GlobalFontTypeValue} from "@/Common/globalFont";

interface DefaultTextProps extends TextProps {
    fontType: GlobalFontTypeValue;
    fontStyle?: Omit<TextStyle, 'fontSize' | 'fontFamily'>
    numberOfLines?: number;
}

const DefaultText = ({fontType, fontStyle, numberOfLines, children, ...props}: DefaultTextProps) => {

    return (
        <Text
            {...props}
            style={{...globalFontStyles[fontType], ...fontStyle}}
            numberOfLines={numberOfLines}
        >
            {children}
        </Text>
    )
}

export default DefaultText;
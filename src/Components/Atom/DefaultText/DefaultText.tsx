import React from "react";
import {StyleProp, Text, TextProps, TextStyle} from "react-native";
import {styles} from "@/Components/Atom/DefaultText/style";

interface DefaultTextProps extends TextProps {
    style?: StyleProp<TextStyle>;
    numberOfLines?: number;

    [propName: string]: any;
}

const DefaultText = ({style, numberOfLines, children, ...props}: DefaultTextProps) => {

    return (
        <Text
            {...props}
            style={[styles.defaultFont, style]}
            numberOfLines={numberOfLines}
        >
            {children}
        </Text>
    )
}

export default DefaultText;
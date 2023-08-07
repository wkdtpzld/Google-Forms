import React from "react";
import {Pressable} from "react-native";
import DefaultText from "@/Components/Atom/DefaultText/DefaultText";
import {BottomSheetButtonType} from "@/Components/Molecules/Modal/constants";
import {styles} from "@/Components/Molecules/Modal/styles";
const BottomSheetButton = ({separator, prefixComponent, postfixComponent, textOptions, children, ...props}: BottomSheetButtonType) => {
    return (
        <Pressable
            {...props}
            style={[
                {flexDirection: "row"},
                styles.btnContainer,
                separator && styles.separator,
                props.style
            ]}
        >
            {prefixComponent}
            <DefaultText {...textOptions} style={[textOptions?.style]}>{children}</DefaultText>
            {postfixComponent}
        </Pressable>
    )
}

export default BottomSheetButton;

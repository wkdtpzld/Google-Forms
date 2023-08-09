import React from "react";
import {View, ViewProps} from "react-native";
import {styles} from "@/Components/Atom/Separator/style";
import {ISpacingType} from "@/Components/Atom/Spacing/Spacing";

interface IProps extends ViewProps {
    type: ISpacingType;
    height?: number;
}

const Separator = ({type, height = 20, ...props}: IProps) => {

    return (
        <View
            style={[type === "height" ? {...styles.separatorHeight, height} : styles.separatorWidth, props.style]}
        />
    )
}

export default Separator;
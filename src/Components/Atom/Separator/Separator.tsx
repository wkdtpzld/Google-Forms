import React from "react";
import {View} from "react-native";
import {styles} from "@/Components/Atom/Separator/style";
import {ISpacingType} from "@/Components/Atom/Spacing/Spacing";

interface IProps {
    type: ISpacingType
    height?: number
}

const Separator = ({type, height = 20}: IProps) => {

    return (
        <View style={type === "height" ? {...styles.separatorHeight, height} : styles.separatorWidth} />
    )
}

export default Separator;
import React from "react";
import {StyleProp, View} from "react-native";

export enum ISpacingType {
    width = 'width',
    height = 'height',
}

interface IProps {
    size: number;
    type: ISpacingType;
}

const Spacing = ({size, type = 'width'}: IProps) => {

    const SpacingType = () => {
        return type === 'width' ? {width: size} : {height: size}
    }

    return (
        <View style={SpacingType()} />
    )
}

export default Spacing
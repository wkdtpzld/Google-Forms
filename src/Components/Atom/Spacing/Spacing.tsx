import React from "react";
import {View} from "react-native";

export const ISpacingObject = {
    width: 'width',
    height: 'height'
} as const;

export type ISpacingType = typeof ISpacingObject[keyof typeof ISpacingObject];

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
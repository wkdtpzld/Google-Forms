import {PressableProps, TextProps, ViewStyle} from "react-native";
import React from "react";
import {BottomSheetModalProps} from "@gorhom/bottom-sheet";
import {SharedValue} from "react-native-reanimated";

export interface BottomSheetButtonType extends PressableProps {
    separator?: boolean;
    prefixComponent?: React.ReactElement | null | undefined;
    postfixComponent?: React.ReactElement | null | undefined;
    textOptions?: Omit<TextProps, "children">;
    style?: ViewStyle
    children?: React.ReactNode;
}

export interface IBottomSheetModalProviderProps extends Omit<BottomSheetModalProps, "snapPoints" | "onDismiss"> {
    visible: boolean;
    isScroll?: boolean;
    onDismiss: () => void;
    snapPoints?: Array<string | number> | SharedValue<Array<string | number>>;
}

export interface IModalBottomProps extends Omit<BottomSheetModalProps, "children" | "snapPoints"> {
    snapPoints?: Array<string | number> | SharedValue<Array<string | number>>;
    index?: number;
}
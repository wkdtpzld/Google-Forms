import React from "react";
import {View, ViewProps} from "react-native";
import {useTheme} from "@react-navigation/native";
import {styles} from "@/Components/Atom/BottomTab/style";
import {useSafeAreaInsets} from "react-native-safe-area-context";

const BottomAbsolute = ({children}: ViewProps) => {

    const {color} = useTheme();
    const {bottom} = useSafeAreaInsets();

    return (
        <View style={styles(color.WHITE, bottom).container}>
            {children}
        </View>
    )
}

export default BottomAbsolute;
import React from "react";
import {KeyboardAvoidingView, Platform, View, ViewProps} from "react-native";
import {useTheme} from "@react-navigation/native";
import {styles} from "@/Components/Atom/BottomTab/style";

interface IProps extends ViewProps {

}

const BottomAbsolute = ({children}: IProps) => {

    const {color} = useTheme();

    return (
        <View style={styles(color.WHITE).container}>
            {children}
        </View>
    )
}

export default BottomAbsolute;
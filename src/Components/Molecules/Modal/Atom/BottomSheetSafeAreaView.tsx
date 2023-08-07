import React from "react";
import {Platform, View, ViewProps} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

const BottomSheetSafeAreaView  = ({children, ...props}:ViewProps) => {

    const isAndroid = Platform.OS === 'android';
    const {bottom} = useSafeAreaInsets();

    return (
        <View
            {...props}
            style={[
                {
                    paddingTop: 4,
                    paddingBottom: isAndroid ? 21 : bottom,
                },
                props.style
            ]}
        >
            {children}
        </View>
    )
}
export default BottomSheetSafeAreaView;
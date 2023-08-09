import React from "react";
import {View, ViewProps} from "react-native";
import {useTheme} from "@react-navigation/native";
import {dynamicStyle} from "@/Components/Molecules/Example/style";
import ExampleHeader from "@/Components/Molecules/Example/ExampleHeader/ExampleHeader";
import ExampleContent from "@/Components/Molecules/Example/ExampleContent/ExampleContent";
import Spacing, {ISpacingType} from "@/Components/Atom/Spacing/Spacing";

const ExampleContainer = ({...props}: ViewProps) => {

    const {color} = useTheme();
    const style = dynamicStyle(color.MAIN_LIGHT);

    return (
        <View style={style.ExampleContainer}>
            <ExampleHeader />
            <ExampleContent />
            <Spacing size={50} type={ISpacingType.height} />
        </View>
    )
}

export default ExampleContainer
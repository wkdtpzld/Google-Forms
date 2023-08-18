import React from "react";
import {styles} from "@/Components/Molecules/Example/style";
import DefaultText from "@/Components/Atom/DefaultText/DefaultText";
import {View} from "react-native";
import {useSelector} from "react-redux";
import {StoreProps} from "@/Redux/store/store";

interface IProps {
    index: number;
}

const ExampleContentHeader = ({index}: IProps) => {

    const item = useSelector((state: StoreProps) => state.formState.state.content[index]);

    return (
        <View style={styles.ExampleHeaderBox}>
            {
                item.required && (
                    <DefaultText
                        fontType={"bold2"}
                        fontStyle={styles.ExampleRequiredText}
                    >*</DefaultText>
                )
            }
            <DefaultText fontType={"semiBold2"}>{item.title}</DefaultText>
        </View>
    )
}

export default ExampleContentHeader;
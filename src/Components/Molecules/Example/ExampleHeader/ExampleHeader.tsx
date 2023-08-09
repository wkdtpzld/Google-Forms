import React from "react";
import FormBox from "@/Components/Atom/FormBox/FormBox";
import {FORM_TYPE} from "@/Components/Atom/FormBox";
import {View} from "react-native";
import DefaultText from "@/Components/Atom/DefaultText/DefaultText";
import {useSelector} from "react-redux";
import {StoreProps} from "@/Redux/store/store";
import {styles} from "@/Components/Molecules/Example/style";

const ExampleHeader = () => {

    const header = useSelector((state: StoreProps) => state.formState.state.header);

    return (
        <FormBox minHeight={150} borderRadius={4} formType={FORM_TYPE.HEADER}>
            <View style={styles.ExampleHeaderBox}>
                <DefaultText fontType={"bold3"}>{header.title}</DefaultText>
            </View>
            <View style={styles.ExampleHeaderBox}>
                <DefaultText fontType={"medium2"} >{header.description}</DefaultText>
            </View>
        </FormBox>
    )
}

export default ExampleHeader;
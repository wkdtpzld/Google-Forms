import React from "react";
import {styles} from "@/Components/Molecules/Form/style";
import {Pressable, View} from "react-native";
import {StackActions, useNavigation} from "@react-navigation/native";
import DefaultText from "@/Components/Atom/DefaultText/DefaultText";
import Spacing from "@/Components/Atom/Spacing/Spacing";
import Icon from "@/Components/Atom/Icon/Icon";
import {IconMap} from "@/Utils/svg";

const FormToExample = () => {

    const navigation = useNavigation();

    return (
        <View
            style={styles.formExample}
        >
            <Pressable
                style={styles.formContentRowContent}
                onPress={() => navigation.dispatch(StackActions.push("Example"))}
            >
                <DefaultText fontType={"medium1"} >미리 보기</DefaultText>
                <Spacing size={8} type={"width"}/>
                <Icon xml={IconMap.eye} width={24} height={24} />
            </Pressable>
        </View>
    )
}

export default FormToExample
import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootParam} from "@/Navigation";
import {StatusBar, View} from "react-native";
import DefaultText from "@/Components/Atom/DefaultText/DefaultText";
import {useTheme} from "@react-navigation/native";
import {styles} from "@/Screen/Home/style";
import FormBox from "@/Components/Atom/FormBox/FormBox";

type Props = NativeStackScreenProps<RootParam, "Home">

const Home = ({route, navigation}: Props) => {

    const {color} = useTheme();

    return (
        <View style={styles(color.MAIN_LIGHT).homeWrapper}>
            <StatusBar barStyle={'light-content'}></StatusBar>
            <FormBox>
                <DefaultText>안녕</DefaultText>
            </FormBox>
        </View>
    );
};

export default Home;
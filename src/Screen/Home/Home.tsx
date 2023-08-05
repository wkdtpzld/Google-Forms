import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootParam} from "@/Navigation";
import {StatusBar, View} from "react-native";
import {useTheme} from "@react-navigation/native";
import {styles} from "@/Screen/Home/style";
import Form from "@/Components/Molecules/Form/Form";

type Props = NativeStackScreenProps<RootParam, "Home">

const Home = ({route, navigation}: Props) => {

    const {color} = useTheme();

    return (
        <View style={styles(color.MAIN_LIGHT).homeWrapper}>
            <StatusBar barStyle={'light-content'}></StatusBar>
            <Form></Form>
        </View>
    );
};

export default Home;
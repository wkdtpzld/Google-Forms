import React from "react";
import {SafeAreaView} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootParam} from "@/Navigation";

type Props = NativeStackScreenProps<RootParam, "Home">

const Home = ({route, navigation}: Props) => {

    return (
        <SafeAreaView style={{flex: 1}}>
        </SafeAreaView>
    );
};

export default Home;
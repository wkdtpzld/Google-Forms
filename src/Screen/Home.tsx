import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootParam} from "@/Navigation";
import {Text, View} from "react-native";

type Props = NativeStackScreenProps<RootParam, "Home">

const Home = ({route, navigation}: Props) => {

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontFamily: "Pretendard-Bold"}}>Hello world</Text>
        </View>
    );
};

export default Home;
import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootParam} from "@/Navigation";
import {StatusBar} from "react-native";
import {useTheme} from "@react-navigation/native";
import {styles} from "@/Screen/Home/style";
import Form from "@/Components/Molecules/Form/Form";
import BottomButton from "@/Components/Molecules/BottomButton/BottomButton";
import {SafeAreaView} from "react-native-safe-area-context";

type Props = NativeStackScreenProps<RootParam, "Home">

const Home = ({route, navigation}: Props) => {

    const {color} = useTheme();

    return (
        <SafeAreaView edges={["top", "bottom"]} style={styles(color.MAIN_LIGHT).homeScreen}>
            <StatusBar barStyle={"light-content"} />
            <Form />
            <BottomButton />
        </SafeAreaView>
    );
};

export default Home;
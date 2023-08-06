import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootParam} from "@/Navigation";
import {ScrollView, StatusBar, View} from "react-native";
import {useTheme} from "@react-navigation/native";
import {styles} from "@/Screen/Home/style";
import Form from "@/Components/Molecules/Form/Form";
import BottomButton from "@/Components/Molecules/BottomButton/BottomButton";

type Props = NativeStackScreenProps<RootParam, "Home">

const Home = ({route, navigation}: Props) => {

    const {color} = useTheme();

    return (
        <>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View style={styles(color.MAIN_LIGHT).homeWrapper}>
                    <StatusBar barStyle={'light-content'}></StatusBar>
                    <Form/>
                </View>
            </ScrollView>
            <BottomButton />
        </>
    );
};

export default Home;
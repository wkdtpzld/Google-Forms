import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootParam} from "@/Navigation";
import {ScrollView, StatusBar, View} from "react-native";
import {useTheme} from "@react-navigation/native";
import {styles} from "@/Screen/Home/style";
import Form from "@/Components/Molecules/Form/Form";
import BottomButton from "@/Components/Molecules/BottomButton/BottomButton";
import Spacing, {ISpacingType} from "@/Components/Atom/Spacing/Spacing";

type Props = NativeStackScreenProps<RootParam, "Home">

const Home = ({route, navigation}: Props) => {

    const {color} = useTheme();

    return (
        <View style={{flex: 1}}>
            <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flexGrow: 1, backgroundColor: color.MAIN_LIGHT}}>
                <View style={styles(color.MAIN_LIGHT).homeWrapper}>
                    <StatusBar barStyle={'light-content'}></StatusBar>
                    <Form />
                </View>
                <Spacing size={70} type={ISpacingType.height} />
            </ScrollView>
            <BottomButton />
        </View>
    );
};

export default Home;
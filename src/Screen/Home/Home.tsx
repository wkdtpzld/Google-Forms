import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootParam} from "@/Navigation";
import {Platform, StatusBar, View} from "react-native";
import {useTheme} from "@react-navigation/native";
import {styles} from "@/Screen/Home/style";
import Form from "@/Components/Molecules/Form/Form";
import BottomButton from "@/Components/Molecules/BottomButton/BottomButton";
import Spacing, {ISpacingType} from "@/Components/Atom/Spacing/Spacing";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {SafeAreaView} from "react-native-safe-area-context";

type Props = NativeStackScreenProps<RootParam, "Home">

const Home = ({route, navigation}: Props) => {

    const {color} = useTheme();

    return (
        <SafeAreaView edges={["top", "bottom"]} style={styles(color.MAIN_LIGHT).homeScreen}>
            <StatusBar barStyle={"light-content"} />
            <KeyboardAwareScrollView
                bounces={false}
                contentContainerStyle={{flexGrow: 1}}
                style={styles(color.MAIN_LIGHT).homeBox}
                enableAutomaticScroll={true}
                extraScrollHeight={200}
                enableOnAndroid={true}
                extraHeight={Platform.select({android: 100})}
            >
                <View
                    style={styles(color.MAIN_LIGHT).homeWrapper}
                >
                    <Form />
                </View>
                <Spacing size={100} type={ISpacingType.height} />
            </KeyboardAwareScrollView>
            <BottomButton />
        </SafeAreaView>
    );
};

export default Home;
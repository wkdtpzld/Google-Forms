import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootParam} from "@/Navigation";
import {Platform, SafeAreaView, StatusBar} from "react-native";
import ExampleContainer from "@/Components/Molecules/Example/ExampleContainer";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {useTheme} from "@react-navigation/native";
import {styles} from "@/Screen/Example/style";

type Props = NativeStackScreenProps<RootParam, "Example">
const Example = ({route, navigation}: Props) => {

    const {color} = useTheme();

    return (
        <SafeAreaView style={styles(color.MAIN_LIGHT).ExampleContainer}>
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
                <ExampleContainer />
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

export default Example;
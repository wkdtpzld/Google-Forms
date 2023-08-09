import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootParam} from "@/Navigation";
import {Platform, SafeAreaView, StatusBar} from "react-native";
import {COLOR_CODE} from "@/Common/globalStyle";
import {styles} from "@/Screen/Home/style";
import ExampleContainer from "@/Components/Molecules/Example/ExampleContainer";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {useTheme} from "@react-navigation/native";

type Props = NativeStackScreenProps<RootParam, "Example">
const Example = ({route, navigation}: Props) => {

    const {color} = useTheme();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLOR_CODE.BLACK}}>
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
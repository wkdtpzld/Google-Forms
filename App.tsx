import React from "react";
import {View} from 'react-native';
import {RootNavigator} from "@/Navigation";
import {Provider} from "react-redux";
import store from "@/Redux/store/store";

export default function App() {
    return (
        <Provider store={store} >
            <View style={{flex: 1}}>
                <RootNavigator />
            </View>
        </Provider>
    );
}

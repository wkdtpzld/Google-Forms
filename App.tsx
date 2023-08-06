import React from "react";
import {Keyboard, Pressable, View} from 'react-native';
import {RootNavigator} from "@/Navigation";
import {Provider} from "react-redux";
import store from "@/Redux/store/store";
import {useFonts} from "expo-font";
export default function App() {
    const [isReady] = useFonts({
        'Pretendard-Regular' : require('./assets/fonts/Pretendard-Regular.ttf'),
        'Pretendard-Medium' : require('./assets/fonts/Pretendard-Medium.ttf'),
        'Pretendard-SemiBold' : require('./assets/fonts/Pretendard-SemiBold.ttf'),
        'Pretendard-Thin' : require('./assets/fonts/Pretendard-Thin.ttf'),
        'Pretendard-Bold' : require('./assets/fonts/Pretendard-Bold.ttf'),
    });

    return (
        <Provider store={store} >
            {
                isReady && (
                    <View style={{flex: 1}}>
                        <RootNavigator />
                    </View>
                )
            }
        </Provider>
    );
}

import React from "react";
import {RootNavigator} from "@/Navigation";
import {Provider} from "react-redux";
import store from "@/Redux/store/store";
import {useFonts} from "expo-font";
import {SafeAreaProvider} from "react-native-safe-area-context";
import ModalBottomSheet from "@/Components/Molecules/Modal/ModalBottomSheet";
export default function App() {
    const [isReady] = useFonts({
        'Pretendard-Regular': require('./assets/fonts/Pretendard-Regular.ttf'),
        'Pretendard-Medium': require('./assets/fonts/Pretendard-Medium.ttf'),
        'Pretendard-SemiBold': require('./assets/fonts/Pretendard-SemiBold.ttf'),
        'Pretendard-Thin': require('./assets/fonts/Pretendard-Thin.ttf'),
        'Pretendard-Bold': require('./assets/fonts/Pretendard-Bold.ttf'),
    });

    return (
        <SafeAreaProvider>
            <Provider store={store}>
                {
                    isReady && (
                        <>
                            <RootNavigator/>
                            <ModalBottomSheet/>
                        </>
                    )
                }
            </Provider>
        </SafeAreaProvider>
    );
}

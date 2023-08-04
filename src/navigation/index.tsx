import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "@/screen/Home";
import {createNavigationContainerRef, NavigationContainer} from "@react-navigation/native";

export type RootParam = {
    Home: undefined;
}

const RootStack = createStackNavigator<RootParam>();
export const navigationRef = createNavigationContainerRef();


export const RootNavigator = () => {

    return (
        <>
            <NavigationContainer
                ref={navigationRef}
            >
                <RootStack.Navigator
                    initialRouteName={"Home"}
                    screenOptions={{headerShown: false}}
                >
                    <RootStack.Group>
                        <RootStack.Screen name="Home" component={Home} />
                    </RootStack.Group>
                </RootStack.Navigator>
            </NavigationContainer>
        </>
    )
}
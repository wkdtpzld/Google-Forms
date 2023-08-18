import React, {useEffect, useState} from "react";
import {Pressable, View, Animated, Easing} from "react-native";
import {dynamicStyle, styles} from "@/Components/Atom/Switch/style";
import {useDispatch, useSelector} from "react-redux";
import {StoreProps} from "@/Redux/store/store";
import {onChangeForm} from "@/Redux/slice/FormSlice/formSlice";
import {Content} from "@/Components/Molecules/Form/FormContent/Header/FormContentHeader";
import {FormContentInfo} from "@/Redux/slice/FormSlice/formType";
import Separator from "@/Components/Atom/Separator/Separator";
import DefaultText from "@/Components/Atom/DefaultText/DefaultText";

interface IProps {
    index: number
}

const Switch = ({index}: IProps) => {

    const [value] = useState(new Animated.Value(0));
    const dispatch = useDispatch();
    const contents = useSelector((state: StoreProps) => state.formState.state.content);

    const moveSwitchToggle = value.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 11],
    });

    const onPressEvent = () => {
        const newContent: FormContentInfo = {...contents[index], required: !contents[index].required}
        const newContents: Content = {content: [...contents.slice(0, index), newContent, ...contents.slice(index + 1)]};
        dispatch(onChangeForm(newContents));
    }

    useEffect(() => {
        Animated.timing(value, {
            toValue: contents[index].required ? 1 : 0,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start();
    }, [contents[index].required]);

    return (
        <>
            <Separator type={"height"}/>
            <DefaultText fontType={"medium1"} >필수</DefaultText>
            <View style={styles.switchWrapper}>
                <Pressable
                    onPress={onPressEvent}
                >
                    <View style={dynamicStyle(contents[index].required).switchBox}>
                        <Animated.View
                            style={[styles.switch, {
                                transform: [{ translateX: moveSwitchToggle }]
                            }]}/>
                    </View>
                </Pressable>
            </View>
        </>
    )
}

export default Switch;
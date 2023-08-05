import {StyleSheet} from "react-native";

export const styles = (themeColor) => StyleSheet.create({
    homeWrapper: {
        flex: 1,
        backgroundColor: themeColor,
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
    },
})
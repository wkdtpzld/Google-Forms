import {StyleSheet} from "react-native";
import {COLOR_CODE} from "@/Common/globalStyle";

export const styles = (themeColor: string) => StyleSheet.create({
    ExampleContainer: {
        flex: 1, backgroundColor: COLOR_CODE.BLACK
    },
    homeBox: {flexGrow: 1, backgroundColor: themeColor},
});
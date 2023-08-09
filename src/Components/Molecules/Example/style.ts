import {StyleSheet} from "react-native";
import {COLOR_CODE} from "@/Common/globalStyle";

export const dynamicStyle = (mainColor: string) => StyleSheet.create({
    ExampleContainer: {
        flex: 1,
        backgroundColor: mainColor,
        paddingHorizontal: 15
    },
    ExampleBoxStyle: {
        paddingHorizontal: 16,
        paddingVertical: 8
    }
})

export const styles = StyleSheet.create({
    ExampleHeaderBox: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: "row",
        alignItems: "center"
    },
    ExampleContentContainer: {
        paddingHorizontal: 15
    },
    ExampleContentRowContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ExampleRequiredText: {
        color: COLOR_CODE.RED_MAIN,
        marginRight: 4
    }
});
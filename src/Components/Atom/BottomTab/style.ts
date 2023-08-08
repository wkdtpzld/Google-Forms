import {StyleSheet} from "react-native";

export const styles = (color: string, height: number) => StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        bottom: height,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
    }
})
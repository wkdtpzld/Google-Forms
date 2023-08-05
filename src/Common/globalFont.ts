import {StyleSheet} from "react-native";
export const GlobalFontTypes = {
    medium1: 'medium1',
    medium2: 'medium2',
    medium3: 'medium3',
    medium4: 'medium4',
    semiBold1: 'semiBold1',
    semiBold2: 'semiBold2',
    semiBold3: 'semiBold3',
    semiBold4: 'semiBold4',
    bold1: 'bold1',
    bold2: 'bold2',
    bold3: 'bold3',
    bold4: 'bold4',
    regular1: 'regular1',
    regular2: 'regular2',
    regular3: 'regular3',
    regular4: 'regular4',
} as const;

export type GlobalFontTypeValue = typeof GlobalFontTypes[keyof typeof GlobalFontTypes];

export const globalFontStyles = StyleSheet.create({
    medium1: {
        fontFamily: "Pretendard-Medium",
        fontSize: 12,
    },
    medium2: {
        fontFamily: "Pretendard-Medium",
        fontSize: 16,
    },
    medium3: {
        fontFamily: "Pretendard-Medium",
        fontSize: 20,
    },
    medium4: {
        fontFamily: "Pretendard-Medium",
        fontSize: 24,
    },
    semiBold1: {
        fontFamily: "Pretendard-SemiBold",
        fontSize: 12,
    },
    semiBold2: {
        fontFamily: "Pretendard-SemiBold",
        fontSize: 16,
    },
    semiBold3: {
        fontFamily: "Pretendard-SemiBold",
        fontSize: 20,
    },
    semiBold4: {
        fontFamily: "Pretendard-SemiBold",
        fontSize: 24,
    },
    bold1: {
        fontFamily: "Pretendard-Bold",
        fontSize: 12,
    },
    bold2: {
        fontFamily: "Pretendard-Bold",
        fontSize: 16,
    },
    bold3: {
        fontFamily: "Pretendard-Bold",
        fontSize: 20,
    },
    bold4: {
        fontFamily: "Pretendard-Bold",
        fontSize: 24,
    },
    regular1: {
        fontFamily: "Pretendard-Regular",
        fontSize: 12,
    },
    regular2: {
        fontFamily: "Pretendard-Regular",
        fontSize: 16,
    },
    regular3: {
        fontFamily: "Pretendard-Regular",
        fontSize: 20,
    },
    regular4: {
        fontFamily: "Pretendard-Regular",
        fontSize: 24,
    },
});
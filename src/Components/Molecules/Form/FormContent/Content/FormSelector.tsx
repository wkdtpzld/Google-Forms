import React, {useCallback} from "react";
import DefaultText from "@/Components/Atom/DefaultText/DefaultText";
import {Pressable, View} from "react-native";
import {COLOR_CODE} from "@/Common/globalStyle";
import Spacing, {ISpacingType} from "@/Components/Atom/Spacing/Spacing";
import DefaultInput from "@/Components/Atom/DefaultInput/DefaultInput";
import {FormContentSelectInfo} from "@/Redux/slice/FormSlice/formType";
import {onChangeForm} from "@/Redux/slice/FormSlice/formSlice";
import {Content} from "@/Components/Molecules/Form/FormContent/Header/FormContentHeader";
import {useDispatch, useSelector} from "react-redux";
import {StoreProps} from "@/Redux/store/store";
import {styles} from "@/Components/Molecules/Form/style";
import {createNewContents, iconType, onChangeSelectItem, selectType} from "@/Components/Molecules/Form/utill";
import FormContentIcon from "@/Components/Molecules/Form/FormContent/Content/FormContentIcon";

interface IProps {
    index: number;
    iconType: iconType;
}

const FormSelector = ({index, iconType}: IProps) => {

    const contents = useSelector((state:StoreProps) => state.formState.state.content);
    const dispatch = useDispatch();

    const onPressMultiple = useCallback((type: selectType) => {
        const newSelectList: FormContentSelectInfo[] = [
            ...contents[index][type],
            {isSelect: false, content: `옵션 ${contents[index][type]?.length + 1}`}
        ];
        const newContents = createNewContents({contents, type, newSelectList, index});
        dispatch(onChangeForm<Content>(newContents));
    }, [contents]);

    const onChangeMultipleContent = useCallback((idx: number, type: selectType, content: string) => {
        const newSelectList = onChangeSelectItem({content, index, idx, type, contents});
        const newContents = createNewContents({contents, type, newSelectList, index});
        dispatch(onChangeForm<Content>(newContents));
    },[contents]);

    /**
     * @description 리스트 렌더링 아이템 분리
     */
    const listRenderItem = useCallback((idx: number) => {
        return (
            <View
                key={`${index}${idx}${contents[index].title}`}
            >
                <View
                    style={styles.formContentRowContent}
                >
                    <FormContentIcon iconType={iconType} isDark />
                    <Spacing size={8} type={ISpacingType.width} />
                    <DefaultInput
                        maxLength={20}
                        value={contents[index].selectQuestion[idx].content}
                        onChange={(e) => onChangeMultipleContent(idx, "selectQuestion", e.nativeEvent.text)}
                        fontType={"medium1"}
                    />
                </View>
                <Spacing size={8} type={ISpacingType.height} />
            </View>
        )
    }, [contents]);

    return (
        <View style={styles.formContentWrapperStyle}>
            <View
                style={styles.formContentStyle}
            >
                {contents[index].selectQuestion.map((_, idx) => (
                    listRenderItem(idx)
                ))}
                <Pressable
                    onPress={() => onPressMultiple("selectQuestion")}
                    style={styles.formContentAppendContent}
                >
                    <FormContentIcon iconType={iconType} />
                    <Spacing size={8} type={ISpacingType.width} />
                    <DefaultText
                        fontType={"medium1"}
                        fontStyle={{color: COLOR_CODE.GRAY_500}}
                    >{`옵션 추가`}</DefaultText>
                </Pressable>
            </View>
        </View>
    )
}

export default FormSelector;
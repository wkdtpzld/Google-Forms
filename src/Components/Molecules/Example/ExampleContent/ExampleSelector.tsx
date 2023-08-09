import React, {useCallback} from "react";
import Separator from "@/Components/Atom/Separator/Separator";
import Spacing, {ISpacingType} from "@/Components/Atom/Spacing/Spacing";
import {Pressable, View} from "react-native";
import FormContentIcon from "@/Components/Molecules/Form/FormContent/Content/FormContentIcon";
import DefaultText from "@/Components/Atom/DefaultText/DefaultText";
import {useDispatch, useSelector} from "react-redux";
import {StoreProps} from "@/Redux/store/store";
import {createNewContents, iconType, onChangeSelectItem, selectType} from "@/Components/Molecules/Form/utill";
import {onChangeForm} from "@/Redux/slice/FormSlice/formSlice";
import {Content} from "@/Components/Molecules/Form/FormContent/Header/FormContentHeader";
import {styles} from "@/Components/Molecules/Example/style";

interface IProps {
    index: number;
    iconType: iconType;
}

const ExampleSelector = ({index, iconType}: IProps) => {

    const contents = useSelector((state: StoreProps) => state.formState.state.content);
    const dispatch = useDispatch();

    const onChangeMultipleContent = useCallback((idx: number, type: selectType, content: string, isSelect: boolean) => {
        const newSelectList = onChangeSelectItem({content, index, idx, type, contents, isSelect});
        const newContents = createNewContents({contents, type, newSelectList, index});
        dispatch(onChangeForm<Content>(newContents));
    },[contents]);

    return (
        <View
            key={`${index}${contents[index].id}`}
            style={styles.ExampleContentContainer}
        >
            <Separator type={ISpacingType.width} />
            <Spacing size={12} type={ISpacingType.height} />
            {contents[index].selectQuestion?.map((item, idx) => {
                return (
                    <>
                        <View
                            style={styles.ExampleContentRowContent}
                        >
                            <Pressable
                                onPress={() => onChangeMultipleContent(idx, "selectQuestion", item.content, !item.isSelect)}
                            >
                                <FormContentIcon iconType={iconType} isSelect={item.isSelect} isDark />
                            </Pressable>
                            <Spacing size={8} type={ISpacingType.width} />
                            <DefaultText fontType={"medium1"}>
                                {item.content}
                            </DefaultText>
                        </View>
                        <Spacing size={16} type={ISpacingType.height} />
                    </>
                )
            })}
        </View>
    )
}

export default ExampleSelector;
import React, {useCallback, useRef} from "react";
import {FORM_TYPE} from "@/Components/Atom/FormBox";
import FormBox from "@/Components/Atom/FormBox/FormBox";
import FormHeader from "@/Components/Molecules/Form/FormHeader/FormHeader";
import {useDispatch, useSelector} from "react-redux";
import {StoreProps} from "@/Redux/store/store";
import FormContent from "@/Components/Molecules/Form/FormContent/FormContent";
import Spacing from "@/Components/Atom/Spacing/Spacing";
import DraggableFlatList, {RenderItemParams} from "react-native-draggable-flatlist";
import FormToExample from "@/Components/Molecules/Form/FormHeader/FormToExample";
import {FormContentInfo} from "@/Redux/slice/FormSlice/formType";
import {onChangeForm} from "@/Redux/slice/FormSlice/formSlice";
import {Content} from "@/Components/Molecules/Form/FormContent/Header/FormContentHeader";
import {styles} from "@/Screen/Home/style";
import {FlatList, Keyboard, Pressable} from "react-native";
import {useTheme} from "@react-navigation/native";

const Form = () => {

    const formContents: FormContentInfo[] = useSelector((state: StoreProps) => state.formState.state.content);
    const dispatch = useDispatch();
    const {color} = useTheme();
    const ref = useRef<FlatList>(null);

    const onClickScrollEvent = (index: number) => {
        ref.current.scrollToIndex({animated: true, index: index});
    }

    const onDragEnd = (to: number, from: number) => {

        const copyData: FormContentInfo[] = [...formContents];
        const prevData: FormContentInfo = {...formContents[to], id: formContents[from].id};
        const nextData: FormContentInfo = {...formContents[from], id: formContents[to].id};

        copyData.splice(to, 1);
        copyData.splice(to, 0, nextData);
        copyData.splice(from, 1);
        copyData.splice(from, 0, prevData);
        dispatch(onChangeForm<Content>({content: copyData}));
    }

    const headerItem = () => {
        return (
            <FormBox formType={FORM_TYPE.HEADER} minHeight={150} borderRadius={4}>
                <FormHeader />
            </FormBox>
        )
    }

    const renderItem = useCallback(({item, getIndex, drag}: RenderItemParams<FormContentInfo>) => {
        return (
            <FormBox
                key={`${item.id}Content`}
                minHeight={100}
                borderRadius={4}
                formType={FORM_TYPE.CONTENT}
            >
                <FormContent drag={drag} getIndex={getIndex} item={item} onClick={onClickScrollEvent} />
            </FormBox>
        )
    }, []);

    /**
     * @description ListHeader, ListFooter () => 사용이유
     * 사용하지 않았을 경우 DraggableFlatList 에서 validation error 를 내놓을 경우가 있어 사용하였습니다.
     */
    return (
        <Pressable
            onPress={Keyboard.dismiss}
            style={styles(color.MAIN_LIGHT).homeWrapper}
        >
            <FormToExample />
            <DraggableFlatList
                ref={ref}
                data={formContents}
                keyExtractor={item => item.id}
                bounces={false}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={headerItem}
                ListFooterComponent={() => <Spacing size={120} type={"height"} />}
                renderItem={renderItem}
                onDragEnd={({from, to}) => onDragEnd(to, from)}
            />
        </Pressable>
    )
}

export default Form;
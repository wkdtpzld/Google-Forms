import React from "react";
import {View} from "react-native";
import Separator from "@/Components/Atom/Separator/Separator";
import {styles} from "@/Components/Molecules/Example/style";
import DefaultInput from "@/Components/Atom/DefaultInput/DefaultInput";
import {FormContentInfo, FormContentTypeInfo} from "@/Redux/slice/FormSlice/formType";
import {useDispatch, useSelector} from "react-redux";
import {StoreProps} from "@/Redux/store/store";
import {Content} from "@/Components/Molecules/Form/FormContent/Header/FormContentHeader";
import {onChangeForm} from "@/Redux/slice/FormSlice/formSlice";

interface IProps {
    type: FormContentTypeInfo;
    index: number;
}

const ExampleText = ({type, index}: IProps) => {

    const contents = useSelector((state: StoreProps) => state.formState.state.content);
    const dispatch = useDispatch();

    const onChangeEvent = (text: string) => {

        const newContent: FormContentInfo = {...contents[index], textQuestion: {answer: text}};
        const newContents: Content = {content: [...contents.slice(0, index), newContent, ...contents.slice(index + 1)]};
        dispatch(onChangeForm<Content>(newContents));
    }

    if (type !== FormContentTypeInfo.SHORT && type !== FormContentTypeInfo.LONG) {
        return;
    }

    return (
        <>
            <View
                style={styles.ExampleContentContainer}
            >
                <Separator type={"width"} />
            </View>
            <View style={styles.ExampleHeaderBox}>
                {
                    type === FormContentTypeInfo.SHORT && (
                        <DefaultInput
                            value={contents[index].textQuestion.answer}
                            onChange={(e) => onChangeEvent(e.nativeEvent.text)}
                            fontType={"medium1"}
                            placeholder={'단답형'}
                            maxLength={100}
                            multiline={true}
                            style={{width: '100%'}}
                        />
                    )
                }
                {
                    type === FormContentTypeInfo.LONG && (
                        <DefaultInput
                            fontType={"medium1"}
                            placeholder={'장문형'}
                            maxLength={1000}
                            multiline={true}
                            style={{width: '100%'}}
                        />
                    )
                }
            </View>
        </>
    )
}

export default ExampleText
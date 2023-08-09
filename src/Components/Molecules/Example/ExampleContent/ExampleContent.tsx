import React from "react";
import FormBox from "@/Components/Atom/FormBox/FormBox";
import {FORM_TYPE} from "@/Components/Atom/FormBox";
import {FormContentTypeInfo} from "@/Redux/slice/FormSlice/formType";
import ExampleSelector from "@/Components/Molecules/Example/ExampleContent/ExampleSelector";
import {useSelector} from "react-redux";
import {StoreProps} from "@/Redux/store/store";
import ExampleContentHeader from "@/Components/Molecules/Example/ExampleHeader/ExampleContentHeader";
import ExampleText from "@/Components/Molecules/Example/ExampleContent/ExampleText";
import {COLOR_CODE} from "@/Common/globalStyle";
import DefaultText from "@/Components/Atom/DefaultText/DefaultText";
import {View} from "react-native";

const ExampleContent = () => {

    const content = useSelector((state: StoreProps) => state.formState.state.content);
    const isNotRequire = (index: number): boolean => {
        if (content[index].required) {
            if (content[index].textQuestion && content[index].textQuestion.answer.length <= 0) {
                return true;
            }
            if (content[index].selectQuestion && content[index].selectQuestion?.findIndex((item) => item.isSelect)) {
                return true;
            }
        }
        return false;
    }

    return (
        <>
            {content.map((item, index) => {
                return (
                    <FormBox
                        key={item.id}
                        minHeight={100}
                        borderRadius={4}
                        formType={FORM_TYPE.CONTENT}
                        viewStyle={isNotRequire(index) ? {borderColor: COLOR_CODE.RED_MAIN } : {}}
                    >
                        <ExampleContentHeader index={index} />
                        <ExampleText type={item.type} index={index}/>
                        {item.type === FormContentTypeInfo.MULTIPLE && (
                            <ExampleSelector index={index} iconType={"circle"}/>
                        )}

                        {item.type === FormContentTypeInfo.CHECK && (
                            <ExampleSelector index={index} iconType={"checkBox"}/>
                        )}
                        {isNotRequire(index) && (
                            <View style={{paddingHorizontal: 15, paddingVertical: 8}}>
                                <DefaultText fontType={"semiBold1"} fontStyle={{color: COLOR_CODE.ERROR_COLOR}}>필수 질문입니다.</DefaultText>
                            </View>
                        )}
                    </FormBox>
                )
            })}
        </>
    )
}

export default ExampleContent;
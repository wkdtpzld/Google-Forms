import React from "react";
import {View, ViewProps} from "react-native";
import {useSelector} from "react-redux";
import {StoreProps} from "@/Redux/store/store";
import {FormContentTypeInfo} from "@/Redux/slice/FormSlice/formType";
import {styles} from "@/Components/Molecules/Form/style";
import FormContentHeader from "@/Components/Molecules/Form/FormContent/Header/FormContentHeader";
import DefaultText from "@/Components/Atom/DefaultText/DefaultText";
import FormSelector from "@/Components/Molecules/Form/FormContent/Detail/FormSelector";


interface IProps extends ViewProps {
    onSelect: boolean;
    index: number;
}

const FormContent = ({onSelect, index, ...props}:IProps) => {

    const contents = useSelector((state:StoreProps) => state.formState.state.content);


    return (
        <View {...props}>
            <View style={styles.formContentBoxStyle}>
                <FormContentHeader index={index} />
            </View>
            {
                contents[index].type === FormContentTypeInfo.SHORT && (
                    <View style={styles.formContentWrapperStyle}>
                        <DefaultText fontType={"semiBold1"}>단답형 질문</DefaultText>
                    </View>
                )
            }
            {
                contents[index].type === FormContentTypeInfo.LONG && (
                    <View style={styles.formContentWrapperStyle}>
                        <DefaultText fontType={"semiBold1"}>장문형 질문</DefaultText>
                    </View>
                )
            }
            {
                contents[index].type === FormContentTypeInfo.MULTIPLE && (
                    <FormSelector index={index} iconType={"circle"}/>
                )
            }
            {
                contents[index].type === FormContentTypeInfo.CHECK && (
                    <FormSelector index={index} iconType={"checkBox"}/>
                )
            }
        </View>
    )
}

export default FormContent;
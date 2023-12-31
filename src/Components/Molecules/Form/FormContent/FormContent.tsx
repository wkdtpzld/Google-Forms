import React from "react";
import {View} from "react-native";
import {FormContentInfo, FormContentTypeInfo} from "@/Redux/slice/FormSlice/formType";
import {styles} from "@/Components/Molecules/Form/style";
import DefaultText from "@/Components/Atom/DefaultText/DefaultText";
import FormSelector from "@/Components/Molecules/Form/FormContent/Content/FormSelector";
import FormContentHeader from "@/Components/Molecules/Form/FormContent/Header/FormContentHeader";
import FormFooter from "@/Components/Molecules/Form/FormContent/Footer/FormFooter";
import {OpacityDecorator, RenderItemParams} from "react-native-draggable-flatlist";

interface IProps extends Omit<RenderItemParams<FormContentInfo>, "isActive"> {
    onClick: (index: number) => void;
}

const FormContent = ({getIndex, item, drag, onClick}: IProps) => {

    const index = getIndex();

    return (
        <>
            { index !== undefined ?  (
                <OpacityDecorator>
                    <View>
                        <FormContentHeader index={index} drag={drag} onClick={onClick}/>
                        {
                            item.type === FormContentTypeInfo.SHORT && (
                                <View style={styles.formContentWrapperStyle}>
                                    <DefaultText fontType={"semiBold1"}>단답형 질문</DefaultText>
                                </View>
                            )
                        }
                        {
                            item.type === FormContentTypeInfo.LONG && (
                                <View style={styles.formContentWrapperStyle}>
                                    <DefaultText fontType={"semiBold1"}>장문형 질문</DefaultText>
                                </View>
                            )
                        }
                        {
                            item.type === FormContentTypeInfo.MULTIPLE && (
                                <FormSelector index={index} iconType={"circle"} onClick={onClick} />
                            )
                        }
                        {
                            item.type === FormContentTypeInfo.CHECK && (
                                <FormSelector index={index} iconType={"checkBox"} onClick={onClick} />
                            )
                        }
                        <FormFooter index={index} />
                    </View>
                </OpacityDecorator>
            ) : null}
        </>

    )
}

export default FormContent;
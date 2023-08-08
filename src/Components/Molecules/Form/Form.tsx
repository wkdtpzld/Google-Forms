import React from "react";
import {FORM_TYPE} from "@/Components/Atom/FormBox";
import FormBox from "@/Components/Atom/FormBox/FormBox";
import FormHeader from "@/Components/Molecules/Form/FormHeader/FormHeader";
import {useSelector} from "react-redux";
import {StoreProps} from "@/Redux/store/store";
import FormContent from "@/Components/Molecules/Form/FormContent/FormContent";
import {Pressable, View} from "react-native";
import {StackActions, useNavigation} from "@react-navigation/native";
import Icon from "@/Components/Atom/Icon/Icon";
import {IconMap} from "@/Utils/svg";
import DefaultText from "@/Components/Atom/DefaultText/DefaultText";
import Spacing, {ISpacingType} from "@/Components/Atom/Spacing/Spacing";

const Form = () => {

    const formContents = useSelector((state: StoreProps) => state.formState.state.content);
    const navigation = useNavigation();

    return (
        <>
            <View
                style={{justifyContent: 'center', alignItems: 'flex-end', paddingTop: 12}}
            >
                <Pressable
                    style={{flexDirection: "row", alignItems: 'center'}}
                    onPress={() => navigation.dispatch(StackActions.push("Example"))}
                >
                    <DefaultText fontType={"medium1"} >미리 보기</DefaultText>
                    <Spacing size={8} type={ISpacingType.width}/>
                    <Icon xml={IconMap.eye} width={24} height={24} />
                </Pressable>
            </View>
            <FormBox formType={FORM_TYPE.HEADER} minHeight={150} borderRadius={4}>
                <FormHeader />
            </FormBox>
            {formContents.map((form, index) => {
                return (
                    <FormBox
                        key={`${form.id}Content`}
                        minHeight={100}
                        borderRadius={4}
                        formType={FORM_TYPE.CONTENT}
                    >
                        <FormContent index={index} onSelect={false} />
                    </FormBox>
                )
            })}
        </>
    )
}

export default Form;
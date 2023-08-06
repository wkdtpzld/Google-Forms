import React from "react";
import DefaultInput from "@/Components/Atom/DefaultInput/DefaultInput";
import Spacing, {ISpacingType} from "@/Components/Atom/Spacing/Spacing";
import {styles} from "@/Components/Molecules/Form/style";
import {View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {StoreProps} from "@/Redux/store/store";
import {onChangeForm} from "@/Redux/slice/FormSlice/formSlice";
import {FormHeaderInfo} from "@/Redux/slice/FormSlice/formType";
import {COLOR_CODE} from "@/Common/globalStyle";

interface Header {
    header: FormHeaderInfo
}

const FormHeader = () => {

    const form = useSelector((state:StoreProps) => state.formState);
    const dispatch = useDispatch();

    const onChange = (value: string, name: string) => {
        const newFormHeader: Header = {header: {...form.state.header, [name]:value}};
        dispatch(onChangeForm<Header>(newFormHeader));
    }

    return (
        <View style={styles.formBoxStyle}>
            <DefaultInput
                fontType={"bold3"}
                value={form.state.header.title}
                onChange={(e) => onChange(e.nativeEvent.text, 'title')}
                placeholder={'제목을 적어주세요.'}
                placeholderTextColor={COLOR_CODE.GRAY_600}
            >
            </DefaultInput>
            <Spacing size={12} type={ISpacingType.height} />
            <DefaultInput
                fontType={"medium2"}
                multiline={true}
                value={form.state.header.description}
                onChange={(e) => onChange(e.nativeEvent.text, 'description')}
                placeholder={'설명을 적어주세요'}
            >
            </DefaultInput>
        </View>
    )
}


export default FormHeader
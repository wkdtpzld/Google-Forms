import React from "react";
import DefaultInput from "@/Components/Atom/DefaultInput/DefaultInput";
import Spacing, {ISpacingType} from "@/Components/Atom/Spacing/Spacing";
import {styles} from "@/Components/Molecules/Form/style";
import {View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {StoreProps} from "@/Redux/store/store";
import {FormHeaderInfo, onChangeForm} from "@/Redux/slice/formSlice";

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
            >
            </DefaultInput>
            <Spacing size={12} type={ISpacingType.height} />
            <DefaultInput
                fontType={"medium2"}
                multiline={true}
                value={form.state.header.description}
                onChange={(e) => onChange(e.nativeEvent.text, 'description')}
            >
            </DefaultInput>
        </View>
    )
}


export default FormHeader
import React from "react";
import {View, ViewProps} from "react-native";
import {styles} from "@/Components/Atom/FormBox/styles";
import Spacing, {ISpacingType} from "@/Components/Atom/Spacing/Spacing";

interface IProps extends ViewProps {

}

const FormBox = ({children, ...props}: IProps) => {

    return (
        <>
            <Spacing size={20} type={ISpacingType.height} />
            <View
                {...props}
                style={styles.formBoxStyle}
            >
                {children}
            </View>
        </>
    )
}

export default FormBox;
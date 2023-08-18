import React from "react";
import {View} from "react-native";
import Separator from "@/Components/Atom/Separator/Separator";
import Spacing from "@/Components/Atom/Spacing/Spacing";
import Switch from "@/Components/Atom/Switch/Switch";
import {styles} from "@/Components/Molecules/Form/style";
import FooterCopy from "@/Components/Molecules/Form/FormContent/Footer/FooterCopy";
import FooterDelete from "@/Components/Molecules/Form/FormContent/Footer/FooterDelete";

interface IProps {
    index: number
}

const FormFooter = ({index}: IProps) => {

    return (
        <View style={styles.formFooterWrapperStyle}>
            <Separator type={"width"}/>
            <View style={styles.formFooterContainer}>
                <View style={styles.flexRowCenter}>
                    <FooterCopy index={index} />
                    <Spacing size={8} type={"width"} />
                    <FooterDelete index={index} />
                    <Switch index={index} />
                </View>
            </View>
        </View>
    )
}

export default FormFooter;
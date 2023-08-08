import React from "react";
import {iconType} from "@/Components/Molecules/Form/utill";
import CheckBoxIcon from "@/Components/Atom/Icon/CheckBoxIcon";
import CircleIcon from "@/Components/Atom/Icon/CircleIcon";

interface IProps {
    iconType: iconType;
    isSelect?: boolean;
    isDark?: boolean;
}

const FormContentIcon = ({iconType, isSelect, isDark}: IProps) => {

    return (
        <>
            {
                iconType === "checkBox" && (
                    <CheckBoxIcon isSelect={isSelect}/>
                )
            }
            {
                iconType === "circle" && (
                    <CircleIcon isDark={isDark} isSelect={isSelect} />
                )
            }
        </>
    )
}

export default FormContentIcon;
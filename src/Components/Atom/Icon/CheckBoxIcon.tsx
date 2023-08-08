import React from "react";
import {IconMap} from "@/Utils/svg";
import {COLOR_CODE} from "@/Common/globalStyle";
import Icon from "@/Components/Atom/Icon/Icon";

interface IProps {
    isSelect?: boolean
}

const CheckBoxIcon = ({isSelect}: IProps) => {

    return (
        <>
            {isSelect && (
                <Icon xml={IconMap.checkBox} width={20} height={20} stroke={COLOR_CODE.BLACK} />
            )}
            {!isSelect && (
                <Icon xml={IconMap.checkBox} width={20} height={20} stroke={COLOR_CODE.GRAY_500} />
            )}
        </>
    )
}

export default CheckBoxIcon;
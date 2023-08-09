import React from "react";
import {IconMap} from "@/Utils/svg";
import {COLOR_CODE} from "@/Common/globalStyle";
import Icon from "@/Components/Atom/Icon/Icon";

interface IProps {
    isSelect?: boolean;
    isDark?: boolean
}

const CircleIcon = ({isDark, isSelect}: IProps) => {

    return (
        <>
            {isDark && isSelect && (
                <Icon xml={IconMap.circle} width={19} height={19} fill={COLOR_CODE.BLACK}/>
            )}
            {!isSelect && isDark && (
                <Icon xml={IconMap.InCircle} width={19} height={19} fill={COLOR_CODE.BLACK}/>
            )}
            {!isDark && (
                <Icon xml={IconMap.InCircle} width={19} height={19} fill={COLOR_CODE.GRAY_500}/>
            )}
        </>
    )
}

export default CircleIcon;
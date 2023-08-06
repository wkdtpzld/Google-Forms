import React from "react";
import {Pressable} from "react-native";
import Icon from "@/Components/Atom/Icon/Icon";
import {IconMap} from "@/Utils/svg";
import BottomAbsolute from "@/Components/Atom/BottomTab/BottomAbsolute";
import {COLOR_CODE} from "@/Common/globalStyle";
import {useDispatch, useSelector} from "react-redux";
import {initialContentState, onAppendForm} from "@/Redux/slice/FormSlice/formSlice";
import {StoreProps} from "@/Redux/store/store";

const BottomButton = () => {

    const formContent = useSelector((state: StoreProps) => state.formState.state.content);
    const dispatch = useDispatch();

    const onPressEvent = () => {
        const newContentList = [...formContent, {...initialContentState, id: formContent.length}];
        dispatch(onAppendForm(newContentList));
    }

    return (
        <BottomAbsolute>
            <Pressable
                onPress={onPressEvent}
                hitSlop={{left: 30, right: 30, top: 8}}
            >
                <Icon xml={IconMap.plusSvg} width={32} height={32} fill={COLOR_CODE.BLACK} />
            </Pressable>
        </BottomAbsolute>
    )
}

export default BottomButton;
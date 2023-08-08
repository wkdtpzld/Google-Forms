import React from "react";
import Icon from "@/Components/Atom/Icon/Icon";
import {IconMap} from "@/Utils/svg";
import {Pressable} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {StoreProps} from "@/Redux/store/store";
import {onChangeForm} from "@/Redux/slice/FormSlice/formSlice";
import {Content} from "@/Components/Molecules/Form/FormContent/Header/FormContentHeader";
import {FormContentInfo} from "@/Redux/slice/FormSlice/formType";

interface IProps {
    index: number
}

const FooterDelete = ({index}: IProps) => {

    const content = useSelector((state: StoreProps) => state.formState.state.content);
    const dispatch = useDispatch();

    const onPressEvent = () => {
        const afterContent: FormContentInfo[] = [...content.slice(index + 1)].map((item: FormContentInfo) => {
            return {...item, id: item.id - 1}
        });

        const newContents = [...content.slice(0, index), ...afterContent];
        dispatch(onChangeForm<Content>({content: newContents}));
    }

    return (
        <Pressable
            onPress={onPressEvent}
        >
            <Icon xml={IconMap.trash} width={22} height={22}/>
        </Pressable>
    )
}

export default FooterDelete;
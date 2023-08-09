import React from "react";
import {View} from "react-native";
import Separator from "@/Components/Atom/Separator/Separator";
import {ISpacingType} from "@/Components/Atom/Spacing/Spacing";
import {styles} from "@/Components/Molecules/Example/style";
import DefaultInput from "@/Components/Atom/DefaultInput/DefaultInput";
import {FormContentTypeInfo} from "@/Redux/slice/FormSlice/formType";

interface IProps {
    type: FormContentTypeInfo;
}

const ExampleText = ({type}: IProps) => {

    if (type !== FormContentTypeInfo.SHORT && type !== FormContentTypeInfo.LONG) {
        return;
    }

    return (
        <>
            <View
                style={styles.ExampleContentContainer}
            >
                <Separator type={ISpacingType.width} />
            </View>
            <View style={styles.ExampleHeaderBox}>
                {
                    type === FormContentTypeInfo.SHORT && (
                        <DefaultInput
                            fontType={"medium1"}
                            placeholder={'단답형'}
                            maxLength={100}
                            multiline={true}
                            style={{width: '100%'}}
                        />
                    )
                }
                {
                    type === FormContentTypeInfo.LONG && (
                        <DefaultInput
                            fontType={"medium1"}
                            placeholder={'장문형'}
                            maxLength={1000}
                            multiline={true}
                            style={{width: '100%'}}
                        />
                    )
                }
            </View>
        </>
    )
}

export default ExampleText
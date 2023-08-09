import React from "react";
import FormBox from "@/Components/Atom/FormBox/FormBox";
import {FORM_TYPE} from "@/Components/Atom/FormBox";
import {FormContentTypeInfo} from "@/Redux/slice/FormSlice/formType";
import ExampleSelector from "@/Components/Molecules/Example/ExampleContent/ExampleSelector";
import {useSelector} from "react-redux";
import {StoreProps} from "@/Redux/store/store";
import ExampleContentHeader from "@/Components/Molecules/Example/ExampleHeader/ExampleContentHeader";
import ExampleText from "@/Components/Molecules/Example/ExampleContent/ExampleText";

const ExampleContent = () => {

    const content = useSelector((state: StoreProps) => state.formState.state.content);

    return (
        <>
            {content.map((item, index) => {
                return (
                    <FormBox key={item.id} minHeight={100} borderRadius={4} formType={FORM_TYPE.CONTENT} >
                        <ExampleContentHeader index={index} />
                        <ExampleText type={item.type} />
                        {item.type === FormContentTypeInfo.MULTIPLE && (
                            <ExampleSelector index={index} iconType={"circle"}/>
                        )}

                        {item.type === FormContentTypeInfo.CHECK && (
                            <ExampleSelector index={index} iconType={"checkBox"}/>
                        )}
                    </FormBox>
                )
            })}
        </>
    )
}

export default ExampleContent;
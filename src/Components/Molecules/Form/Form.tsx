import React from "react";
import {FORM_TYPE} from "@/Components/Atom/FormBox";
import FormBox from "@/Components/Atom/FormBox/FormBox";
import FormHeader from "@/Components/Molecules/Form/FormHeader/FormHeader";
import {useSelector} from "react-redux";
import {StoreProps} from "@/Redux/store/store";

const Form = () => {

    const formContents = useSelector((state: StoreProps) => state.formState.state.content);

    return (
        <>
            <FormBox formType={FORM_TYPE.HEADER} minHeight={150} borderRadius={4}>
                <FormHeader />
            </FormBox>
            {formContents.map((form) => {
                return (
                    <FormBox
                        key={`${form.id}Content`}
                        minHeight={150}
                        borderRadius={4}
                        formType={FORM_TYPE.CONTENT}
                    >

                    </FormBox>
                )
            })}
        </>
    )
}

export default Form;
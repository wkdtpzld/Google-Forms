import React from "react";
import {FORM_TYPE} from "@/Components/Atom/FormBox";
import FormBox from "@/Components/Atom/FormBox/FormBox";
import FormHeader from "@/Components/Molecules/Form/FormHeader/FormHeader";

const Form = () => {


    return (
        <FormBox formType={FORM_TYPE.HEADER} minHeight={150} borderRadius={4}>
            <FormHeader />
        </FormBox>
    )
}

export default Form;
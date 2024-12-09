import React, { useState } from "react";

function Form() {
  // validate the input
  const [inputState, setInputSate] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  return (
    <FormStyled>
      <div className="input-control">
        <input type="text" />
      </div>
    </FormStyled>
  );
}
const FormStyled = styled.form``;
export default Form;

import Dropdown from "../Dropdown";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Submit from "../Submit";
import React, { useState } from "react";

const Form = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const [disabled, setDisabled] = useState(true);

  const handleChange = () =>{
      console.log(`textArea change`)
    setDisabled(false);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <TextInput labelText="Subject" labelId="subject" inputValue="input" />
        <Dropdown />
        <TextArea  textAreaValue="" onChange={handleChange} />
        <Submit submitButtonValue="Confess" disabled={disabled} />
      </form>
    </div>
  );
};

export default Form;

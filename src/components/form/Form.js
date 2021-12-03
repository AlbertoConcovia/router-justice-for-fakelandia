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

  const handleChange = () => {
    setDisabled(false);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <TextInput labelText="Subject" labelId="subject" inputValue="input" />
        <Dropdown />
        <TextArea handleChange={handleChange} />
        <Submit submitButtonValue="Confess" disabled={disabled} />
      </form>
    </div>
  );
};

export default Form;

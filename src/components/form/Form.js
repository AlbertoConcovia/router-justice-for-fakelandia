import Dropdown from "../Dropdown";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Submit from "../Submit";

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <TextInput labelText="Subject" labelId="subject" inputValue="input" />
        <Dropdown />
        <TextArea  textAreaValue="" />
        <Submit SubmitButtonValue="Confess"/>
      </form>
    </div>
  );
};

export default Form;

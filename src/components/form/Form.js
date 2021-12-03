import Dropdown from "../Dropdown";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import SubmitForm from "../SubmitForm";

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
        <SubmitForm />
      </form>
    </div>
  );
};

export default Form;

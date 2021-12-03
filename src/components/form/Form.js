import Dropdown from "../Dropdown";
import TextInput from "../TextInput";

const Form = () => {
  const handleSubmit = (event) => {
    // onSubmitForm( numberofbeings, whatIs2plus2, reasonForSparing );
    event.preventDefault();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <TextInput
          labelText="Subject"
          labelId="subject"
          inputValue="input"
        />

        <Dropdown />
{/* 
        <ReasonForSparing
          reasonForSparing={reasonForSparing}
          onChangeReasonForSparing={(e) => setReasonForSparing(e.target.value)}
        /> */}

        {/* <SubmitForm /> */}
      </form>
    </div>
  );
};

export default Form;

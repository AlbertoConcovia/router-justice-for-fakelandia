
const TextInput = ({ labelText, labelId,  inputValue}) => {


  return (
    <div>
      <label htmlFor={labelId}>{labelText}</label>
      <input
        id={labelId}
        type="text"
        value={inputValue}
      />
    </div>
  );
};

export default TextInput;

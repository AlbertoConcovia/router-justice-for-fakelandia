
const TextArea = ({ textAreaValue }) => {

  return (
    <div>
      <label htmlFor="textarea"></label>

      <textarea
        id="textarea"
        name="textarea"
        rows="5"
        cols="40"
        value={textAreaValue}
      />

    </div>
  );
};

export default TextArea;

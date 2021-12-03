
const TextArea = ({ handleChange}) => {

  return (
    <div>
      <label htmlFor="textarea"></label>

      <textarea
        id="textarea"
        name="textarea"
        rows="5"
        cols="40"
        onChange={handleChange}
      />

    </div>
  );
};

export default TextArea;

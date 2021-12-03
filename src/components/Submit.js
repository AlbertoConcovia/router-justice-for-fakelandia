const Submit = ({ submitButtonValue, disabled }) => {

  return (
    <div >
      <input type='submit' value={submitButtonValue} disabled={disabled} />
    </div>
  );
}
  
  export default Submit;
const Button = ({ buttonText, ReqType, setReqType }) => {
  return (
    <div className="button-container">
      <button
        className={ReqType === buttonText ? "selected" : null}
        type="button"
        onClick={() => setReqType(buttonText)}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Button;

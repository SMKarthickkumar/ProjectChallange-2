import Button from "./Button";

const Form = ({ ReqType, setReqType }) => {
  return (
    <form onChange={(e) => e.preventDefault()}>
      <Button buttonText="users" ReqType={ReqType} setReqType={setReqType} />
      <Button buttonText="posts" ReqType={ReqType} setReqType={setReqType} />
      <Button buttonText="comments" ReqType={ReqType} setReqType={setReqType} />
    </form>
  );
};

export default Form;

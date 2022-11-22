import status from "./Status.module.css";

const Status = (props) => {
  return <div className={status.block}>{props.value}</div>;
};

export default Status;

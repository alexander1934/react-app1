import preloader from "../../../img/preloader.svg";
import style from "./Preloader.module.css"


let Preloader = (props) => {
  return (
    <div className = {style.preloader}>
      <img style={{width: props.width}}  src={preloader} alt="" />
    </div>
  );
};

export default Preloader;

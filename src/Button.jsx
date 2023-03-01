import { useState } from "react";

function Button(props){
    const [toggleState, setToggledState] = useState(false);
    const name = props.name;

  function handleClick(){
    setToggledState(toggleState => !toggleState);
  }

  let toggleClassCheck = toggleState ? "-active" : "";

  return(
    <button
    type="button"
    className={`btn${toggleClassCheck}`}
    onClick={handleClick}>{name}</button>
  )
}

export default Button;
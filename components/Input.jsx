import classNames from "classnames";
import { useRef, useState } from "react";
import useOnClickOutside from "use-onclickoutside";
import styles from "../styles/Input.module.css";
const Input = ({ htmlFor,type,id,children,value,className }) => {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef();
  const closeInput = () => {
    setFocus(false);
  };
  useOnClickOutside(inputRef, closeInput);
  return (
    <div className={classNames(styles.input,className)} onClick={() => setFocus(true)}>
      <label
        htmlFor={htmlFor}
        className={classNames(styles.label, focus && styles.label__focus)}
      >
        {children}
      </label>
      <input type={type} id={id} ref={inputRef} value={value}/>
    </div>
  );
};

export default Input;

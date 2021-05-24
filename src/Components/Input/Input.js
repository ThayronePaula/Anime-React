import React from "react";
import styles from "./Input.module.scss";


const Input = ({ value, setValue }) => {
  return (
    <input className={styles.input} type='search' value={value} onChange={({ target }) => setValue(target.value)} />
  );
};

export default Input;

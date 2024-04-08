//Button component
"use client";
import React from "react";
import styles from "./Button.module.scss";
import { ButtonProps } from "../../types";

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={false}>
      {children}
    </button>
  );
};

export default Button;

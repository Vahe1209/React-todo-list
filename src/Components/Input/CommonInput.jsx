import React from "react";
import "./InputStyles.css";
export default function CommonInput({ inputValue }) {
  return <input type="text" value={inputValue} className="column" />;
}

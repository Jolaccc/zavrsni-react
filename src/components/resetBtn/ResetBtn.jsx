import React from "react";
import "./Reset.scss";

export default function ResetButton({ onReset }) {
  return (
    <button className="reset_btn" onClick={onReset}>
      Reset
    </button>
  );
}

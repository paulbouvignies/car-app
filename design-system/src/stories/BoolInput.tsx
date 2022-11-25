
import React from "react";

import "../style/BoolInput.css";

type Props = {
  label?: string;
  type: 'checkbox' | 'radio';
  required?: boolean;
  readonly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


// generate a random id for the input
const generateUUID = ():string => {
  return "xx-4x-yxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}


export const BoolInput:React.FC<Props> = (props) => {
  const { label, type, required, readonly } = props;
  const id = generateUUID();
  return (
    <div className='boolInput'>
      <input
        id={id}
        className='boolInput__input'
        type={type}
        required={required || false}
        readOnly={readonly || false}
        onChange={props.onChange}
      />
      {label && <label className='boolInput__label' htmlFor={id}>{label}</label>}
    </div>
  );
}

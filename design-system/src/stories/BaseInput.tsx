
import React from "react";



type Props = {
  type: 'tel' | 'text' | 'email' | 'password' | 'number' ;
  placeholder?: string;
  label: string;
  required?: boolean;
  readonly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// define state of the input
//const [value, setValue] = React.useState("");
//const [isFocused, setIsFocused] = React.useState(false);

// generate a random id for the input
const generateUUID = ():string => {
  return "xx-4x-yxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}


// if input is focused, add the class "focused" to the label
//const getClass = ():string => {
//  let base = "baseInput";
//  return isFocused ? base+"--focused" : base;
//}

// handle the change of the input
//const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//  setValue(e.target.value);
//  console.log(value)
//}

export const BaseInput:React.FC<Props> = (props) => {
  const { type, placeholder, label, required, readonly } = props;
  const id = generateUUID();
  return (
    <div className={ 'baseInput' }>
      <label
        className='baseInput__label'
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className='baseInput__input'
        id={id}
        type={type}
        value=''
        placeholder={placeholder || ""}
        required={required || false}
        readOnly={readonly || false}
        //onFocus={() => { setIsFocused(true) }}
        //onBlur={() => { setIsFocused(false) ; }}
        //onChange={(e) => { handleChange(e) }}
        onChange={props.onChange}
      />
    </div>
  );
};

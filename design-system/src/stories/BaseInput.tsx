
import React from "react";


type Props =  {
  type: 'tel' | 'text' | 'email' | 'password' | 'number' ;
  placeholder?: string;
  label: string;
  required?: boolean;
  readOnly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

// generate a random id for the input
const generateUUID = ():string => {
  return "xx-4x-yxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}



export const BaseInput:React.FC<Props> = (props) => {
  const { label, type, ...rest } = props;
  const [isFocus, setIsFocus] = React.useState(false);
  const id = generateUUID();




  return (
    <div className={ `baseInput ${isFocus ? 'baseInput--focus' : ''}` } >
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
        onFocus={(_e) => { setIsFocus(true) }}
        onBlur={(_e) => { setIsFocus(false) }}
        {...rest}
      />

    </div>
  );
};

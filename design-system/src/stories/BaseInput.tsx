
import React from "react";


type Props =  {
  type: 'tel' | 'text' | 'email' | 'password' | 'number' ;
  placeholder?: string;
  label: string;
  required?: boolean;
  readonly?: boolean;
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
  const { type, placeholder, label, required, readonly, ...rest } = props;
  const id = generateUUID();
  const [isFocus, setIsFocus] = React.useState(false);

  console.log(isFocus)

  return (
    <div className={ `baseInput  ${isFocus ? 'baseInput--focus' : ''}` }
         onFocus={(_e) => { console.log("i'm here 2"); setIsFocus(true) }}
         onBlur={(_e) => { setIsFocus(false) }}
    >
      <label
        className='baseInput__label'
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={`baseInput__input`}
        id={id}
        type={type}
        placeholder={placeholder || ""}
        required={required || false}
        readOnly={readonly || false}
        onFocus={(_e) => { console.log("i'm here"); setIsFocus(true) }}
        onBlur={(_e) => { setIsFocus(false) }}
        {...rest}
      />
    </div>
  );
};

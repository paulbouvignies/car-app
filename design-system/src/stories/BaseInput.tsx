
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
  const { type, placeholder, label, required, readonly } = props;
  const id = generateUUID();

  const [value, setValue] = React.useState(props.value || "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setValue(event.target.value);
    if (props.onChange) {
      props.onChange(event);
    }
  }

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
        placeholder={placeholder || ""}
        required={required || false}
        readOnly={readonly || false}
        value={value}
        onChange={(e) => { handleChange(e)} }
        //onFocus={() => { setIsFocused(true) }}
        //onBlur={() => { setIsFocused(false) ; }}
        //onChange={(e) => { handleChange(e) }}
      />
    </div>
  );
};

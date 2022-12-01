
import React, { useId } from "react";


type Props =  {
  type: 'tel' | 'text' | 'email' | 'password' | 'number' ;
  placeholder?: string;
  label: string;
  required?: boolean;
  readOnly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};




export const BaseInput:React.FC<Props> = (props) => {
  const { label, type, ...rest } = props;
  const [isFocus, setIsFocus] = React.useState(false);
  const id = useId();




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

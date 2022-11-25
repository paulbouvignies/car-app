
import React from "react";

type Props = {
  type?: 'button' | 'submit';
  label: string;
  variant?: 'primary' | 'secondary';
  onclick?: () => void;
  onsubmit?: () => void;
}

export const Button:React.FC<Props> = (props) => {
  const { type = 'button', label, variant = "primary" } = props;
  if (type === "submit"){
    return(
      <button
        className={ 'cta cta--boxed--'+variant }
        type={type}
        onSubmit={props.onsubmit}
      >
        {label}
      </button>
    )
  }
  else {
    return (
      <button
        className={ 'cta cta--boxed--'+variant }
        type={type}
        onClick={props.onclick}
      >
        {label}
      </button>
    )

  }

}

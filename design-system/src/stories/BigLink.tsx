
import React from "react";


type Props = {
  label: string;
  href: string;
  target?: '_self' | '_blank';
  title?: string;
}

export const BigLink:React.FC<Props> = (props) => {
  const { label, ...rest } = props;
  return(
    <a
      className='cta cta--boxed'
      {...rest}
    >{label}</a>
  )
}

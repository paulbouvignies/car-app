
import React from "react";


type Props = {
  label: string;
  href: string;
}

export const BackLink:React.FC<Props> = (props) => {
  const { label, ...rest } = props;
  return(
    <a
      className='cta cta--goBack'
      {...rest}
    ><span className="cta--goBack__arrow">←</span>{label}</a>
  )
}

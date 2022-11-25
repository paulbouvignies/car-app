
import React from "react";

import '../style/Cta.css'

type Props = {
  label: string;
  destination: string;
  target?: '_self' | '_blank';
  title?: string;
}

export const FooterLink:React.FC<Props> = (props) => {
  const { label, destination, target = "_self", title } = props;
    return(
      <a
        href={destination}
        target={target}
        title={title}
        className='cta cta--footerType'
      >{label}</a>
    )
}

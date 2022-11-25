
import React from "react";

import '../style/Cta.css'

type Props = {
  label: string;
  destination: string;
  title?: string;
}

export const BackLink:React.FC<Props> = (props) => {
  const { label, destination, title } = props;
  return(
    <a
      href={destination}
      title={title}
      className='cta cta--goBack'
    ><span className="cta--goBack__arrow">←</span>{label}</a>
  )
}

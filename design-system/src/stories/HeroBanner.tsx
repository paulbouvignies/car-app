
import React from "react";

import "../style/HeroBanner.css";

type Props = {
  cover: string;
  content?: string;
};

// get content with correct cariage return (and add arrow)
// make this until vhtml to prenvent XSS
const getFormatedContent = (content: string) => {
  return content.split("/n").map((item, key) => {
    return (
      <p key={key}>
        { key === 0 && <span className="heroBanner__content__arrow">▷</span> }
        {item}
        <br />
      </p>
    );
  });
}



export const HeroBanner:React.FC<Props> = (props) => {
  const { cover, content } = props;
  return (
    <div className="heroBanner">
      <img className="heroBanner__cover" src={cover} alt=""/>
      {content && <div className="heroBanner__content">{getFormatedContent(content)}</div>}
    </div>
  );
};

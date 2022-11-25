
import React from "react";
import "../style/StyleGuide.css"


type Props = {
  category: string;
}


export const StyleGuide:React.FC<Props> = (props) => {
  const { category } = props;
  return (
    <div className="styleGuide">
      {category === 'color' &&
        <div className="styleGuide__color">
          <h1 className="styleGuide__color__title">Colors:</h1>
        </div>
      }
      {category === 'font' &&
        <div className="styleGuide__font">
          <p>Font</p>
        </div>
      }
    </div>
  );
};

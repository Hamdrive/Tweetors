import React from "react";
import EmptyIllustration from "../../assets/EmptyIllustration.svg";

export const EmptyResult = ({text}) => {
  return (
    <div className="flex-column flex-center">
        <div className="div__emptyResult">
            
      <img src={EmptyIllustration} alt="empty result" />
        </div>
      <p className="h4">{text}</p>
    </div>
  );
};

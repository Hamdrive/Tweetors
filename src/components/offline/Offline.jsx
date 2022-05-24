import React from "react";
import OfflineIllustration from "../../assets/OfflineIllustration.svg";

export const Offline = () => {
  return (
    <div className="flex-column flex-center h-100">
      <div className="div__emptyResult">
        <img src={OfflineIllustration} alt="offline user" />
      </div>
      <p className="h4 txt-center mt-1">
        Uh Oh! Looks like you are currently offline!
      </p>
      <p className="h4 txt-center">Please try again later.</p>
    </div>
  );
};

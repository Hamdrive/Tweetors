import React from "react";
import OfflineIllustration from "../../assets/OfflineIllustration.svg";

export const Offline = () => {
  return (
    <div className="offline__main flex-column flex-center h-100">
      <div className="offline__illustration">
        <img src={OfflineIllustration} alt="offline user" />
      </div>
      <p className="offline__primarytxt mt-1">
        Uh Oh! Looks like you are currently offline!
      </p>
      <p className="offline__primarytxt">Please try again later.</p>
    </div>
  );
};

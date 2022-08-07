import React from "react";

export const IF = ({ check, PrimaryComp, SecondaryComp }) => {
  return check ? <PrimaryComp /> : <SecondaryComp />;
};

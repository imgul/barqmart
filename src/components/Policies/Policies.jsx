import React from "react";
import {
  PoliciesItemPrice,
  PoliciesItemShipping,
  PoliciesItemOffer,
} from "./PoliciesItem";

const Policies = () => {
  return (
    <div className="policies shadow">
      <div className="container-fluid">
        <div className="row">
          <PoliciesItemShipping />
          <PoliciesItemPrice />
          <PoliciesItemOffer />
        </div>
      </div>
    </div>
  );
};

export default Policies;

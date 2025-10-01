import React, { use } from "react";
import { AssetContext } from "./FamalyTree";

const Spacila = () => {
  const asset = use(AssetContext);
  return (
    <div>
      <h2>spacial: {asset}</h2>
    </div>
  );
};

export default Spacila;

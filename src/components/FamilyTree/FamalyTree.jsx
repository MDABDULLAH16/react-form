import React, { createContext } from "react";
import Father from "./Father";
import Uncle from "./Uncle";

// eslint-disable-next-line react-refresh/only-export-components
export const AssetContext = createContext("");
const FamilyTree = () => {
  const asset = "gold";
  return (
    <div>
      <div className="family-tree">
        <h2>GrandPa</h2>
        <div className="flex">
          <AssetContext value={asset}>
            <Father></Father>
            <Uncle></Uncle>
          </AssetContext>
        </div>
      </div>
    </div>
  );
};

export default FamilyTree;

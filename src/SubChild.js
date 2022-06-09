import React from "react";
import { MyContext } from "./App";
export default function SubChild() {
  return (
    <div>
      <MyContext.Consumer>
        {(data) => data}
        </MyContext.Consumer>
    </div>
  );
}

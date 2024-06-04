import React from "react";

export default function Bt05() {
  function checkCondition(condition: boolean, callback: Function) {
    setTimeout(() => {
      callback(condition);
    }, 1000);
  }

  checkCondition(true, printCondition);
  //   checkCondition(false, printCondition);

  function printCondition(check: boolean) {
    console.log("Điều kiện trả về:", check);
  }
  return <div>Bt05</div>;
}

import React from "react";

export default function Bt04() {
  function processArray(number: number, callback: Function): void {
    setInterval(() => {
      callback(number++);
    }, 1000);
  }

  processArray(1, printArr);
  function printArr(number: number): void {
    console.log(`phần tử thứ: ${number}`);
  }
  return <div></div>;
}

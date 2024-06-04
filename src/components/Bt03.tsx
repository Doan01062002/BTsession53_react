import React from "react";

export default function Bt03() {
  function processArray(arrNumber: number[], callback: Function) {
    arrNumber.map((item, index) => {
      setTimeout(() => {
        callback(item);
      }, index++ * 1000);
    });
  }

  processArray([1, 2, 3, 4], printArr);

  function printArr(number: number) {
    console.log(`phần tử thứ: ${number}`);
  }
  return <div>Bt03</div>;
}

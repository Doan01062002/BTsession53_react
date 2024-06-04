import React from "react";

export default function Bt01() {
  function caculate(a: number, b: number) {
    let sum = a + b;
    return callback(sum);
  }

  caculate(10, 20);

  function callback(sum: number): void {
    console.log(sum);
  }
  return <div>Bt01</div>;
}

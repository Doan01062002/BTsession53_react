import React from "react";

export default function Bt02() {
  function delayedCallback(callback: () => void, a: number) {
    setTimeout(() => {
      callback();
    }, a);
  }

  delayedCallback(myCallback, 2000);

  function myCallback() {
    console.log("callback function được gọi sau một khoảng thời gian ");
  }
  return <div>Bt02</div>;
}

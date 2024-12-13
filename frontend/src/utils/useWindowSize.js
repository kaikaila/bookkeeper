//自定义hook
// return the window size

import React from "react";
import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    // everytime hte window resize, it trigger the updateSize method
    window.addEventListener("resize", updateSize);
    // clean up the eventListener
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return {
    width: size[0],
    height: size[1],
  };
  //以下写法无效，原因是：
  //window.innerWidth 和 window.innerHeight 是浏览器全局对象的值

  //  它们是由浏览器直接管理的值，React 不会主动追踪或感知这些变化。
  //  window 的属性变化不会触发 React 的状态更新。

  //  React 的重新渲染是通过 state 和 props 的变化来驱动的。
  // useEffect(() => {
  //   const updateSize = () => {
  //     setSize([window.innerWidth, window.innerHeight]);
  //   };
  // }, [window.innerWidth, window.innerHeight]);
};

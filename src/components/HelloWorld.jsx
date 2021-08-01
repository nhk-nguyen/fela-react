import React from "react";
import { useFela } from "react-fela";
import * as style from './HelloWorld.style'


export default function HelloWorld({ style1 = true, fontSize }) {
  const { css } = useFela();

  return (
    <div className={style1 ? css(style.hello) : css(style.hello2({fontSize: `${fontSize}px`}))}>Hello World !</div>
  );
}

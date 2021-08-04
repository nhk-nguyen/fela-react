import React from "react";
import { useFela } from "react-fela";
import * as style from './HelloWorld.style'


export default function HelloWorld({ style1 = true, fontSize }) {
  const { css, renderer } = useFela();
  const animate  = renderer.renderKeyframe(style.keyframe2);
  const classNams1 = [style.hello]
  const classNams2 = css([style.hello2({fontSize, animate}), style.media])
  return (
    <div className={style1 ? css(classNams1) : classNams2}>Hello World !</div>
  );
}

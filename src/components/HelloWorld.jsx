import React from "react";

import { useFela } from "react-fela";

const style = {
  backgroundColor: "black",
  color: "pink",
  width: "100%",
  height: "50vh",
  fontSize: "40px",
  textAlign: "center",
  lineHeight: "50vh",
};

const style2 = ({fontSize}) => ({
  backgroundColor: "pink",
  color: "black",
  width: "100%",
  height: "50vh",
  fontSize,
  textAlign: "center",
  lineHeight: "50vh",
  ':hover': {
    color: 'green'
  },
});

export default function HelloWorld({ style1 = true }) {
  const { css } = useFela();

  return (
    <div className={style1 ? css(style) : css(style2({fontSize: '80px'}))}>Hello World !</div>
  );
}

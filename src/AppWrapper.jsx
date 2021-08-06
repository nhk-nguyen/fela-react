import React from "react";
import { useFela } from "react-fela";
import Card from "./component/Card";

const style = ({theme}) => ({
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  backgroundColor: theme.bgColor,
  color: theme.color,
  transition: 'all .5s ease'
});
const contentWrapper = {
  display: "flex",
  flexWrap: "wrap",
  marginTop: 40,
};
const titleStyle = ({theme}) => ({
    color: theme.color,
    marginLeft: 20,
    transition: 'color .5s ease'
});

export default function AppWrapper({ setDarkMode }) {
  const { css, theme } = useFela();

  return (
    <div className={css(style({theme}))}>
      <div>
        <label>Darkmode</label>
        <input
          type="checkbox"
          onChange={(e) => setDarkMode(e.target.checked)}
        />
      </div>
      <h1 className={css(titleStyle({theme}))}>Welcome to DogeHouse</h1>
      <div className={css(contentWrapper)}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

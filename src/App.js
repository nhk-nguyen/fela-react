import React, {useState} from 'react'
import AppWrapper from './AppWrapper'
import { ThemeProvider } from 'react-fela';

const themeNormal = {
  bgColor: 'white',
  color: 'black',
  border: '1px solid #4a4a4a'
}
const darkMode = {
  bgColor: '#4a4a4a',
  color: 'white',
  border: '1px solid #fff'
}

function App() {
  const [isDarkMode, setDarkMode] = useState(false)
  return (
    <ThemeProvider theme={!isDarkMode? themeNormal : darkMode}>
      <AppWrapper setDarkMode={setDarkMode}/>
    </ThemeProvider>
  );
}

export default App;

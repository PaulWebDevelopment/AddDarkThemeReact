import React, { useState, useEffect } from 'react';
import './App.css';

function registerTheme(isDarkTheme) {
  let rootElement = document.getElementById("root");
  let theme = isDarkTheme ? "theme-dark" : "theme-light"
  console.log("Saving theme :", theme)

  window.localStorage.setItem('theme', theme);

  rootElement.className = "root " + theme;
}

function checkUserPreferenceIsDark() {
  const localStorageTheme = window.localStorage.getItem('theme');
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  if (localStorageTheme == "theme-dark") {
    return true;
  } else {
    return prefersDarkScheme.matches;
  }
}

function App() {
  const userPreference = checkUserPreferenceIsDark() 
  const [isDarkTheme, setIsDarkTheme] = useState(userPreference);

  useEffect(() => {
    registerTheme(isDarkTheme)
 }, [isDarkTheme]);

  return (
    <div className={"App"}>
      <button onClick={() => setIsDarkTheme(!isDarkTheme)}>Switch theme</button>
    </div>
  );
}

export default App;
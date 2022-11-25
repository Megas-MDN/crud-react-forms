import React, { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

function Header () {
  const theme = useContext(ThemeContext);

  return(
    <header>
      <h1>CRUD com Forms & React plus DarkMode icon → </h1>
      <button onClick={() => theme.toogleTheme()}>
        {theme.color === 'dark' ? '☀️' : '🌒'}
      </button>
    </header>
  );
}

export default Header;
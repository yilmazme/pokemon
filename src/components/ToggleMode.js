import React, { useState,useEffect } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css"


const DarkModeToggle = ({handleTheme}) => {
    const [isDark, setIsDark] = useState(false);
  
    useEffect(() => {
        if (isDark) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      }, [isDark]); 

//console.log("toggle comp rendered")
    return (
      <Toggle
        className="dark-mode-toggle"
        checked={isDark}
        onChange={({ target }) => {setIsDark(target.checked); handleTheme(isDark)}}
        icons={{ checked: "🔆", unchecked: "🌙" }}
        aria-label="Dark mode toggle"
      />
    );
  };

  export default React.memo(DarkModeToggle)
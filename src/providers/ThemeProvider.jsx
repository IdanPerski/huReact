import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { node } from "prop-types";

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [isDark, setDark] = useState(false);

  const toggleDarkMode = useCallback(() => {
    setDark((prev) => !prev);
  }, [setDark]);

  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });

  const value = useMemo(
    () => ({ isDark, toggleDarkMode }),
<<<<<<< HEAD
    [isDark, toggleDarkMode],
=======
    [isDark, toggleDarkMode]
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
  );

  return (
    <MuiThemeProvider theme={theme}>
<<<<<<< HEAD
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
=======
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    </MuiThemeProvider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a NameProvider");
  return context;
};

ThemeProvider.propTypes = {
  children: node.isRequired,
};

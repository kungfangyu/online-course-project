/*
 * @Author: Fangyu Kung
 * @Date: 2024-06-25 17:36:57
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-06-25 17:37:07
 * @FilePath: /online-course-project/src/components/ClientThemeProvider.js
 */
// src/components/ClientThemeProvider.js
"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function ClientThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

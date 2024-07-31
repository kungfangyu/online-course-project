// src/app/layout.js
import ClientThemeProvider from "@/components/ClientThemeProvider";
import { AuthProvider } from "@/contexts/AuthContext";
import "./globals.css";

export const metadata = {
  title: "Skill Builder Online Course Platform",
  description: "Skill Builder Online Course Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Skill Builder</title>
      </head>
      <body>
        <AuthProvider>
          <ClientThemeProvider>{children}</ClientThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

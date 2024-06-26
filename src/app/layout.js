// src/app/layout.js
import ClientThemeProvider from "@/components/ClientThemeProvider";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

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
        <ClientThemeProvider>{children}</ClientThemeProvider>
      </body>
    </html>
  );
}

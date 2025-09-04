import { Outfit,Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const ovo = Ovo({
  subsets: ["latin"],
  weight:["400"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight:["400","500","600","700"],
});

export const metadata = {
  title: "Portfolio - Kingshuk Roy",
  description: "This is my Personal Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            </ThemeProvider>
      </body>
    </html>
  );
}

import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const outfit = Outfit({
  subsets: ["latin"],
  weights: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Portfolio - Andrés Rodriguez",
  description: "",
};

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.locale} className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.variable} antialiased leading-8 overflow-x-hidden`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}


import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });

export const metadata = {
  title: "Anuitas - Reyusin",
  description: "Menghitung tabel perencanaan anggaran otomatis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

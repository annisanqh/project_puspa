
import "./globals.css";
import { Playpen_Sans } from "next/font/google";

const playpen = Playpen_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata = {
  title: "Puspa",
  description: "Aplikasi Puspa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={playpen.className}>
      <body>{children}</body>
    </html>
  );
}

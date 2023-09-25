import "./globals.css";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], weight: "variable" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/name.png" sizes="any" />
        <title>Nicola Pasqualini</title>
        <meta name="description" content="Hi! I'm Nicola Pasqualini and I love to develop software or design interfaces and think about how they will help people. My biggest passion is to get myself and my work every day better."/>
      </head>
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}

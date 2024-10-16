import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Monstrous Makeover",
  description: "Transform into a monster",
  icons: {
    icon: '/icon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ `${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          <div className="relative h-full w-full bg-neutral-900">
            <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}

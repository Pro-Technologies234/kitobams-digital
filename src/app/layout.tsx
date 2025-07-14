import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';

const sora = localFont({
  src: [
    { path: '../assets/fonts/sora/Sora-ExtraLight.ttf', weight: '200', style: 'normal' },
    { path: '../assets/fonts/sora/Sora-Light.ttf',        weight: '300', style: 'normal' },
    { path: '../assets/fonts/sora/Sora-Regular.ttf',      weight: '400', style: 'normal' },
    { path: '../assets/fonts/sora/Sora-SemiBold.ttf',     weight: '600', style: 'normal' },
    { path: '../assets/fonts/sora/Sora-Bold.ttf',         weight: '700', style: 'normal' },
    { path: '../assets/fonts/sora/Sora-ExtraBold.ttf',    weight: '800', style: 'normal' },
  ],
  variable: '--font-sora',
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Kitobams Digital",
  description: "Created by Poye kitoye",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sora.variable} antialiased text-black dark:text-white bg-gray-100 dark:bg-zinc-950 font-sora`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

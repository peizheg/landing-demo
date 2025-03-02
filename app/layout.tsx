import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "camelAI: AI-powered Data Analysis | SQL-Free Business Intelligence",
  description: "Transform your data analysis with camelAI. Ask questions in plain English and get instant insights, charts, and dashboards from your database. Connect to PostgreSQL, Snowflake, BigQuery & more. No SQL needed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="camelAI: The AI Data Analyst. Ask questions, get instant charts and insights from your data." />
        <meta property="og:description" content="Transform your data analysis with camelAI. Ask questions in plain English and get instant insights from your database. No SQL needed." />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
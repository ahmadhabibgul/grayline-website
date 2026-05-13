import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grayline | Websites and SaaS Development",
  description:
    "Grayline is a student-led development studio building conversion-focused websites and scalable SaaS solutions for modern businesses.",
  keywords: ["Grayline", "web development", "SaaS development", "custom software", "startup studio"],
  openGraph: {
    title: "Grayline | Smart solutions, built right.",
    description: "Websites and SaaS solutions for modern businesses.",
    url: "https://grayline.dev",
    siteName: "Grayline",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

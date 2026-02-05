import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bilal Imamoglu — MLOps & Platform Engineer",
  description:
    "MLOps & Platform Engineer building cloud-based ML systems. From data ingestion and feature pipelines to automated training, deployment, and monitoring.",
  keywords: [
    "MLOps",
    "Platform Engineering",
    "Machine Learning",
    "DevOps",
    "AI",
    "Cloud Infrastructure",
    "Data Science",
  ],
  authors: [{ name: "Bilal Imamoglu" }],
  openGraph: {
    title: "Bilal Imamoglu — MLOps & Platform Engineer",
    description:
      "Building ML platforms that turn ideas into production-grade products",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilal Imamoglu — MLOps & Platform Engineer",
    description:
      "Building ML platforms that turn ideas into production-grade products",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

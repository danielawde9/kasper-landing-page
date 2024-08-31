import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kasper - Empowering Small Businesses with Digital Marketing",
  description:
    "Kasper provides tailored digital marketing training and strategies to help small, community-focused businesses thrive online.",
  openGraph: {
    type: "website",
    url: "https://your-kasper-website.com", // Replace with Kasper's actual URL
    title: "Kasper - Empowering Small Businesses with Digital Marketing",
    description:
      "Kasper offers expert digital marketing training and strategies to help small businesses grow their online presence.",
    images: [
      {
        url: "https://your-kasper-website.com/og-image.jpg", // Replace with the actual image URL for OG
        width: 1200,
        height: 630,
        alt: "Kasper - Digital Marketing for Small Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://your-kasper-website.com", // Replace with Kasper's actual URL
    title: "Kasper - Empowering Small Businesses with Digital Marketing",
    description:
      "Learn how Kasper's digital marketing strategies can help your small business succeed online.",
    images: [
      "https://your-kasper-website.com/og-image.jpg", // Replace with the actual image URL for Twitter
    ],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

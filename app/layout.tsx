import type { Metadata } from "next";
import "./globals.css";

const title = "Justyna Jasińska | Fizjoterapia pediatryczna i stomatologiczna Kraków";
const description =
  "Fizjoterapia dzieci i niemowląt w Krakowie, fizjoterapia stomatologiczna, TMJ, bruksizm, terapia manualna IFOMPT i współpraca z logopedą.";

export const metadata: Metadata = {
  metadataBase: new URL("https://justynajasinskafizjo.pl"),
  title,
  description,
  keywords: [
    "fizjoterapia dzieci Kraków",
    "fizjoterapia niemowląt Kraków",
    "fizjoterapia stomatologiczna Kraków",
    "fizjoterapeuta dziecięcy Kraków",
    "bruksizm fizjoterapia Kraków",
    "TMJ Kraków",
  ],
  authors: [{ name: "Justyna Jasińska" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pl_PL",
    url: "https://justynajasinskafizjo.pl",
    siteName: "Justyna Jasińska Fizjoterapia",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Justyna Jasińska - fizjoterapia pediatryczna i stomatologiczna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}

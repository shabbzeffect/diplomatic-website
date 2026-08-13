/** @type {import('next').MetaData} */
import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Diplomatic Office Supplies Limited - Trusted Safe and Security Solutions Supplier in Kenya and East Africa",
  description: "Premium distributor of safes, vaults, and security storage solutions in Kenya and East Africa. Banks, SACCOs, government institutions, and individuals.",
};

type NavigationLink = {
  href: string;
  label: string;
};

type FooterColumn = {
  title: string;
  links: { href: string; label: string }[];
};

const navLinks: NavigationLink[] = [
  { href: "/", label: "Home" },
  { href: "/safes", label: "Safes" },
  { href: "/banking-solutions", label: "Banking & Financial Solutions" },
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/request-a-quote", label: "Request a Quote" },
];

const footerColumns: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { href: "/about-us", label: "About Us" },
      { href: "/certificates", label: "Certificates" },
      { href: "/contact-us", label: "Contact Us" },
    ],
  },
  {
    title: "Products",
    links: [
      { href: "/safes/home-safes", label: "Home Safes" },
      { href: "/safes/office-safes", label: "Office Safes" },
      { href: "/safes/hotel-safes", label: "Hotel Safes" },
      { href: "/safes/gun-safes", label: "Gun Safes" },
      { href: "/safes/cash-deposit-safes", label: "Cash Deposit Safes" },
      { href: "/safes/data-safes", label: "Data / Media Safes" },
      { href: "/safes/vault-doors", label: "Vault Doors / Strong Rooms" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services/safe-delivery", label: "Safe Delivery" },
      { href: "/services/safe-installation", label: "Safe Installation" },
      { href: "/services/safe-relocation", label: "Safe Relocation" },
      { href: "/services/safe-maintenance", label: "Maintenance & Repairs" },
      { href: "/services/lock-upgrades", label: "Lock Upgrades" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/resources/faqs", label: "FAQs" },
      { href: "/resources/buying-guides", label: "Buying Guides" },
      { href: "/resources/safe-size-guide", label: "Safe Size Guide" },
    ],
  },
];

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen bg-background text-foreground">
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
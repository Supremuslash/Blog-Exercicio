import type { Metadata } from "next";
import "./globals.css";
import Layout from "../components/Layout";

export const metadata: Metadata = {
  title: "Viajando",
  description: "Relatos, ideias e caminhos para viajar com mais curiosidade e presença.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

import { Header } from "@/components/header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="antialiased">
        <Header />

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

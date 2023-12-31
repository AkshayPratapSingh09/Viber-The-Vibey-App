import { Figtree, Inter } from "next/font/google";
import "./globals.css";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Viber",
  description: "Vibe to Music!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Siderbar>{children}</Siderbar>
      </body>
    </html>
  );
}

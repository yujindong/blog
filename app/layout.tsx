import DefaultSearchDialog from "@/components/search";
import { RootProvider } from "fumadocs-ui/provider";
import type { Metadata } from "next";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: {
    template: "%s - yujindong",
    default: "yujindong",
  },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`flex min-h-svh flex-col antialiased`}>
        <RootProvider
          // search={{ enabled: false }}
          search={{
            SearchDialog: DefaultSearchDialog,
            hotKey: [{ display: "K", key: "k" }],
          }}
          theme={{ defaultTheme: "system" }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}

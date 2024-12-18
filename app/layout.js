import localFont from "next/font/local";
import "./globals.css";
import TopEventsHeader from "@/components/TopEventsHeader";
import NavigationBar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-100 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className=" sticky -top-16 z-20">
          <TopEventsHeader />
          <NavigationBar />
        </div>
        {children}
      </body>
    </html>
  );
}

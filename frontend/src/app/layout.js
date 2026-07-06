import "./globals.css";
import { Space_Grotesk } from "next/font/google"; 
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Fixed the typo: Using the exact underscore variable from the import statement
const modernFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-modern",
});

export const metadata = {
  title: "Spectre-Hub",
  description: "AI Powered Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`antialiased bg-[#050409] text-zinc-100 min-h-screen flex flex-col selection:bg-purple-900 selection:text-purple-200 ${modernFont.className} tracking-normal`}>
        <AuthProvider>
          <Navbar />
          
          <div className="flex-grow">
            {children}
          </div>
          
          <Footer />

          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#0d091a",
                color: "#f4f4f5",
                border: "1px solid rgba(147, 51, 234, 0.2)",
                fontFamily: "var(--font-modern), sans-serif",
                fontSize: "14px",
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
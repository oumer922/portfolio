import "./globals.css";
import Footer from "@/components/Footer"; // 1. Import it

export const metadata = {
  title: 'Oumer Hussen Ahmed | Portfolio',
  description: 'Front-End Developer & Data Analyst Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-900 antialiased">
        {children}
        <Footer /> 
      </body>
    </html>
  )
}
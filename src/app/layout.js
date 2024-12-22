import './globals.css'
import "@/styles/tailwind.css";
import "../styles/index.css";
import "../styles/font.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
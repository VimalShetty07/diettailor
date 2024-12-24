import './globals.css'
import "@/styles/tailwind.css";
import "../styles/index.css";
import "../styles/font.css";

export const metadata = {
  title: 'My Next.js App',
  description: 'Description of my app',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
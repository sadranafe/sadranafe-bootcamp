import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Admin Panel | sadra nafe",
  author: "sadra nafe",
};

export default function RootLayout({ children }) {
  return (
    <html lang = "fa" dir = "rtl">
      <body>
          <Providers>
            <header>
              <Navbar/>
            </header>
            
            <main>
              {children}
            </main>

            <footer></footer>
          </Providers>
        </body>
    </html>
  );
}

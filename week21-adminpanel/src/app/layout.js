import AuthProvider from "@/context/AuthContext";
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
        <AuthProvider>
          <header>
            <Navbar/>
          </header>
          
          <main>
            {children}
          </main>

          <footer></footer>
        </AuthProvider>
        </body>
    </html>
  );
}

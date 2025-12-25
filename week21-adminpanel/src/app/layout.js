import "./globals.css";

export const metadata = {
  title: "Admin Panel | sadra nafe",
  author: "sadra nafe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fn" dir = "rtl">
      <body>{children}</body>
    </html>
  );
}

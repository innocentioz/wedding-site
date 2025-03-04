import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className='cormorant'>{children}</main>
      </body>
    </html>
  );
}

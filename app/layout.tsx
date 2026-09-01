import "./globals.css";


export default function RootLayout({ children,nav }: Readonly<{children: React.ReactNode, nav: React.ReactNode}>) {
  return (
    <html
      lang="en"
    >
      
      <body className="min-h-full flex flex-col">
        {nav}
        {children}
      </body>
    </html>
  );
}

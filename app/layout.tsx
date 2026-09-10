import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import {Providers} from './providers';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({ children,nav }: Readonly<{children: React.ReactNode, nav: React.ReactNode}>) {
  return (
    <html
      lang="en" className={cn("font-sans", geist.variable)}
    >
      
      <body className="min-h-full flex flex-col">
        <Providers>
          {nav}
          {children}
        </Providers>
      </body>
    </html>
  );
}

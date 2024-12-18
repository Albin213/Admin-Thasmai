
import { Inter } from "next/font/google";
import ProtectedRoutes from "./protectRoute/protectRoute";
import Navbar from "./components/navbar/navbar";
import SideBar from "./components/siderbar/sidebar";
import {Toaster} from 'react-hot-toast';
import "./globals.css";
import NewSidebar from "./components/NewSidebar";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thasmai Admin",
  description: "Generated by create next app",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default function RootLayout({ children }) {
  console.log('log',children);
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <title>Thasmai admin</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = "true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <div className="m-0 p-0 flex w-[100vw] h-[100vh] overflow-hidden">
          <Toaster />
          <div className="m-0 w-0 md:w-[18%] h-full">
            {/* <SideBar/>   */}
            <NewSidebar/>
          </div>
          <div className="w-full md:w-[82%] h-full">
            <Navbar/>
            <div className="w-full h-full py-5 px-2 bg-[#F3F3F3] border-solid border-t-4 border-l-4 ">
              { 
                <ProtectedRoutes> {children}</ProtectedRoutes>
              }
             </div>
          </div>

        </div>
      </body>
    </html>
  );
}

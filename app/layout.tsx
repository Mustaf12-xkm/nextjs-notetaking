import "./globals.css";
import type { Metadata } from "next";
import Storeprovider from "./components/provider";
import Header from "./components/header/header";
import FormDialog from "./components/AddNote/addnote";
export const metadata: Metadata = {
  title: "note taking next js"
};
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body  className=' w-full md:w-[60%] sm:w-[80%]  mx-auto px-2'>
      <Storeprovider>
        <Header/>
        <FormDialog />
        {children}
      </Storeprovider>
    </body>
  </html>
  );
}

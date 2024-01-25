import BlackHeader from "@/components/BlackHeader";
import Footer from "@/components/Footer";
import OrangeHeader from "@/components/OrangeHeader";
import AccessibilityBtn from "@/components/АccessibilityBtn";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <BlackHeader />
      <OrangeHeader />
      <AccessibilityBtn />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}

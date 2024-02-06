import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

import type {AppProps} from "next/app";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export default function ({ Component, pageProps }: AppProps) {
  return (
      <div className={inter.className}>
        <GoogleOAuthProvider clientId="209233479344-tv444g1ce6kb2hbjlgc3omdji3rai4fc.apps.googleusercontent.com">
          <Component {...pageProps} />
          <Toaster />
        </GoogleOAuthProvider>
      </div>
  );
}


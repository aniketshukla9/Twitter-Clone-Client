import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type {AppProps} from "next/app";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function ({ Component, pageProps }: AppProps) {
  return (
      <div className={inter.className}>
        <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId="209233479344-tv444g1ce6kb2hbjlgc3omdji3rai4fc.apps.googleusercontent.com">
          <Component {...pageProps} />
          <Toaster />
          <ReactQueryDevtools />
        </GoogleOAuthProvider>
        </QueryClientProvider>
      </div>
  );
}


import type { AppProps } from 'next/app';

import { Header } from '@/components/Shared/Header';

import GlobalStyle from '@/styles/globalStyles';
import { Footer } from '@/components/Shared/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}


import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from '../components/Header/Header';
import '../styles/globals.css'

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient} >
      <Component {...pageProps} />
      {/* <Header>
      </Header> */}
    </QueryClientProvider >
  )
}

export default MyApp

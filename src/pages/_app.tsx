import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
import '../styles/globals.css'

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient} >
      <Layout>
        <Component {...pageProps} />
      </Layout>

    </QueryClientProvider >
  )
}

export default MyApp

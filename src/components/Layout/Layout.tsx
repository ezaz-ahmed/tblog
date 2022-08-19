
import type { AppProps } from 'next/app'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ children }: AppProps) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;
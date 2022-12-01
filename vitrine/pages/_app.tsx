
import type { AppProps } from 'next/app'

import Header from "../components/Header";
import Footer from "../components/Footer";
import "design-system/dist/index.css";
import "../styles/global.css";

import "../styles/header&Footer.css";
import "../styles/Login.css";
import "../styles/Register.css";


export default function App({ Component, pageProps }: AppProps) {

  return(
      <div className="app">
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </div>
  )

}

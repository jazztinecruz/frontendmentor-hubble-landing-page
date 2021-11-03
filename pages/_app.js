import '../styles/globals.css'
import AppLayuout from '../components/AppLayout'

function MyApp({ Component, pageProps }) {
  return(
    <AppLayuout>
      <Component {...pageProps} />
    </AppLayuout>
  )
}

export default MyApp

import Header from '../components/main/Header'
import Footer from '../components/main/Footer'
import { Outlet } from 'react-router-dom'
import Alert from '../components/molecules/Alert'

const MainLayout = () => {
  return (
    <main>
        <Alert />
        <Header />
        <Outlet />
        <Footer />
    </main>
  )
}

export default MainLayout
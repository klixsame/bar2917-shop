import Footer from '../modules/Footer/Footer'
import Header from '../modules/Header/Header'
import SidebarMenu from '../modules/SidebarMenu/SidebarMenu'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='main__content container'>
        <SidebarMenu />
        <div className='main__content__own'>
          <Header />
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout

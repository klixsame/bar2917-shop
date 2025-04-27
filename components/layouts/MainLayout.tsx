import Footer from '../modules/Footer/Footer';
import Header from '../modules/header/Header';
import MobileNav from '../modules/MobileNav/MobileNav';
import SidebarMenu from '../modules/SidebarMenu/SidebarMenu';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='main__content container'>
        <SidebarMenu />
        <div className='main__content__own'>
          <Header />
          <main className='dark'>
          {children}
          </main>
        </div>
      </div>
      <Footer />
      <MobileNav />
    </>
  )
}

export default MainLayout

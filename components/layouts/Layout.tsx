import Footer from '../modules/Footer/Footer';
import Header from '../modules/Header/Header';

const Layout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
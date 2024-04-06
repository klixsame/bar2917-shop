import Header from '../modules/header/Header';

const Layout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <>
            <Header />
            {children}
            <div className='' />
        </>
    );
};

export default Layout;
import Link from 'next/link';

const Logo = () => {
    return (
    <Link className='logo' href='/'>
        <img className='logo__img' src="/img/logo.svg" alt="Bar2917 Logo" />
    </Link>
    );
};

export default Logo;
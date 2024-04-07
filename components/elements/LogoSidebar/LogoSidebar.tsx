import Link from 'next/link'
import Image from 'next/image'

const LogoSidebar = () => {
  return (
    <Link className='logo' href='/'>
      <Image
        className='logo__img__sidebar'
        src='/img/logo.svg'
        alt='Bar2917 Logo'
        width={159}
        height={99}
      />
    </Link>
  )
}

export default LogoSidebar

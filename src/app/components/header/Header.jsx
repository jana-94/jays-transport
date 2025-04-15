'use client';
import Link from 'next/link';
import Image from 'next/image';
import './header.css';

const Header = () => {
  return (
    <div className='header-outline'>
      <Link href='/'>
        <Image
          className='header-logo'
          src='/img/logo.svg'
          alt='logo'
          width={200}
          height={40}
        />
      </Link>

      <div className='header-nav'>
        <Link className='nav-title' href='/'>
          <h1>Home</h1>
        </Link>

        <div className='dropdown'>
          <h1 className='nav-title flex'>Our Services <img className='ml-2' src='/img/down-arrow.svg' /></h1>
          <div className='dropdown-content'>
            <Link href='/mototaxi'>MotoTaxi</Link>
            <Link href='/'>VTC</Link>
            <Link href='/'>Mise à disposition de voitures</Link>
          </div>
        </div>

        <div className='dropdown'>
          <h1 className='nav-title flex'>Reservation <img className='ml-2' src='/img/down-arrow.svg' /></h1>
          <div className='dropdown-content'>
            <Link href='/'>MotoTaxi</Link>
            <Link href='/'>VTC</Link>
          </div>
        </div>

        <Link className='nav-title' href='/'>
          <h1>Contact</h1>
        </Link>
      </div>
      <div className='header-lang'>
      <Link className='nav-title' href='/'>
          <h1 className='nav-title flex'><img className='mr-2' src='/img/call.svg' /> +33 (0)6 84 40 61 26</h1>
        </Link>
        <div className='dropdown'>
          <h1 className='nav-title flex'><img className='mr-2' src='/img/lang.svg' /> En <img className='ml-2' src='/img/down-arrow.svg' /></h1>
          <div className='dropdown-content'>
            <Link href={'#'} style={{display: 'flex'}}> <Image height={20} onResize={'contain'} width={20} className='mr-2' src='/img/en.png' /><span>English</span></Link>
            <Link href={'#'} style={{display: 'flex'}}> <Image height={20} onResize={'contain'} width={20} className='mr-2' src='/img/fr.png' /><span>French</span></Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;

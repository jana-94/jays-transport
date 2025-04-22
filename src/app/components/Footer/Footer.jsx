'use client';

import Link from 'next/link';
import './footer.css';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const { t } = useTranslation();
  const address = "8 Avenue des Saules, 91390, Morsang-sur-Orge, France";
  const encodedAddress = encodeURIComponent(address);
  return (
    <div id="footer" className='footer-outline'>
      <div className='logo-container'>
        <Link href='/'>
          <Image
            className='header-logo'
            src='/img/logo_white.svg'
            alt='logo'
            width={200}
            height={40}
          />
        </Link>
        {/* <div className='social'>
          <Link href='/' className='social-icon-outer'>
            <img className='social-icon' src='/img/fb.svg' alt='facebook' />
          </Link>
          <Link href='/' className='social-icon-outer'>
            <img className='social-icon' src='/img/tw.svg' alt='twitter' />
          </Link>
          <Link href='/' className='social-icon-outer'>
            <img className='social-icon' src='/img/instagram.svg' alt='instagram' />
          </Link>
          <Link href='/' className='social-icon-outer'>
            <img className='social-icon' src='/img/linkedin.svg' alt='linkedin' />
          </Link>
        </div> */}
        <Link
          href={`https://www.google.com/maps?q=${encodedAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="address-content"
        >
        <span className="address flex"><img className="mr-2 h-3 w-3" src="/img/marker.svg" /> <p className='hide-bottom-txt'> 8 Avenue des Saules, 91390, Morsang-sur-Orge, France </p></span>
        </Link>
        <Link href="tel:+33177052718" className="address-content">
          <span className="address flex"><img className="mr-2 h-3 w-3" src="/img/call_white.svg" /> <p className='hide-bottom-txt'>+33 (0)1 77 05 27 18 </p></span>
        </Link>
      </div>
      <div style={{ width: '100%' }}>
        <img className='h-20 mt-8 car-animation' src='/img/car2.png' />
      </div>
      <div className='divider' />
      <div className='footer-bottom'>
        <div className="address-content">
          <p className="address flex">
            {t('title')} &copy;{new Date().getFullYear()}. All rights received
          </p>
        </div>
        <Link href="tel:+33684406126" className="address-content">
          <span className="address flex"><img className="mr-2 h-3 w-3" src="/img/call_white.svg" /> <p className='hide-bottom-txt'> +33 (0)6 84 40 61 26 </p></span>
        </Link>
        <Link href="mailto:contact@jays-transport.fr" className="address-content">
          <span className="address flex"> <img className="mr-2 h-3 w-3" src="/img/mail.svg" /> <p className='hide-bottom-txt'> contact@jays-transport.fr </p></span>
        </Link>
        <Link className='address-content' href='https://wa.me/33684406126' target='_blank' rel='noopener noreferrer'>
          <span className="address flex"><img className='mr-2 h-4 w-4' src='/img/whatsapp.svg' /><p className='hide-bottom-txt'> {t('whatsapp')}</p></span>
        </Link>
      </div>

    </div>
  );
};

export default Footer;
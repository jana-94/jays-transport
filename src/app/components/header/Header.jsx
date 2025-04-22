'use client';
import Link from 'next/link';
import Image from 'next/image';
import './header.css';
import { useLanguage } from '@/app/language/LanguageProvider';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const [navOpen, setNavOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleOptionClick = () => {
    setNavOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        setNavOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={'header-outline'}>
    <div className='header-web'>
      <Link href='/'>
        <Image
          className='header-logo'
          src='/img/logo.svg'
          alt='logo'
          width={200}
          height={40}
        />
      </Link>
      <div className={'header-nav'}>
        <Link className='nav-title' href='/'>
          <h1>{t('home')}</h1>
        </Link>

        <div className='dropdown'>
          <h1 className='nav-title flex'>{t('ourServices')} <img className='ml-2' src='/img/down-arrow.svg' /></h1>
          <div className='dropdown-content'>
            <Link href='/mototaxi'>{t('motoTaxi')}</Link>
            <Link href='/vtc'>{t('vtc')}</Link>
            <Link href='/van'>{t('carProvision')}</Link>
          </div>
        </div>

        <div className='dropdown'>
          <h1 className='nav-title flex'>{t('reservation')} <img className='ml-2' src='/img/down-arrow.svg' /></h1>
          <div className='dropdown-content'>
            <Link href={'/motoservice'}>{t('motoTaxi')}</Link>
            <Link href={'/vtcservice'}>{t('vtc')}</Link>
          </div>
        </div>

        <Link className='nav-title' href="/#contact">
          <h1>{t('contact')}</h1>
        </Link>
      </div>
      <div className='header-lang'>
        <Link className='nav-title' href="tel:+33684406126">
          <h1 className='nav-title flex'><img className='mr-2' src='/img/call.svg' /> +33 (0)6 84 40 61 26</h1>
        </Link>
        <div className='dropdown'>
          <h1 className='nav-title flex'><img className='mr-2' src='/img/lang.svg' /> {language} <img className='ml-2' src='/img/down-arrow.svg' /></h1>
          <div className='dropdown-content'>
            <div onClick={() => changeLanguage('en')} className='dropdown-item'>
              <Image height={20} width={20} className='mr-2' src='/img/en.png' alt='English' />
              <span>English</span>
            </div>
            <div onClick={() => changeLanguage('fr')} className='dropdown-item'>
              <Image height={20} width={20} className='mr-2' src='/img/fr.png' alt='French' />
              <span>French</span>
            </div>
          </div>
        </div>
        <Link className='nav-title' href='https://wa.me/33684406126' target='_blank' rel='noopener noreferrer'>
          <h1 className='nav-title flex'><img className='mr-2 h-6 w-6' src='/img/whatsapp.svg' /> {t('whatsapp')}</h1>
        </Link>
      </div>
      </div>
      <div className={`header-mobile ${navOpen ? 'active' : ''}`} ref={menuRef}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Link href='/' onClick={handleOptionClick}>
        <Image
          className='header-logo'
          src='/img/logo.svg'
          alt='logo'
          width={200}
          height={40}
        />
      </Link>
      <div className='header-lang'>
        <Link className='nav-title' href="tel:+33684406126" onClick={handleOptionClick}>
          <span style={{display: 'flex', alignItems: 'center'}} ><img className='mr-2 h-3 w-4' src='/img/call.svg' /><h1 className='nav-title call-hide'> +33 (0)6 84 40 61 26</h1></span>
        </Link>
        <div className='dropdown'>
        <span style={{display: 'flex', alignItems: 'center'}} > <img className='mr-2 h-3 w-4' src='/img/lang.svg' /><h1 className='nav-title'> {language} </h1> <img className='ml-2' src='/img/down-arrow.svg' /> </span>
          <div className='dropdown-content'>
            <div onClick={() => { changeLanguage('en'); handleOptionClick(); }} className='dropdown-item'>
              <Image height={20} width={20} className='mr-2 h-4 w-4' src='/img/en.png' alt='English' />
              <span>English</span>
            </div>
            <div onClick={() => { changeLanguage('fr'); handleOptionClick(); }} className='dropdown-item'>
              <Image height={20} width={20} className='mr-2 h-4 w-4' src='/img/fr.png' alt='French' />
              <span>French</span>
            </div>
          </div>
        </div>
        <Link className='nav-title' href='https://wa.me/33684406126' target='_blank' rel='noopener noreferrer'>
        <span style={{display: 'flex', alignItems: 'center'}} > <img className='mr-2 h-5 w-5' src='/img/whatsapp.svg' /> <h1 className='nav-title call-hide'> {t('whatsapp')}</h1> </span>
        </Link>
      </div>
      <div className='hamburger' onClick={toggleNav} ref={burgerRef}>
      <span className='bar'></span>
      <span className='bar'></span>
      <span className='bar'></span>
    </div>
      </div>
      <div className={`mobile-nav ${navOpen ? 'active' : ''}`}>
      <div style={{width: '100%'}}>
        <Link className='nav-title-txt' href='/' onClick={handleOptionClick}>
          <h1>{t('home')}</h1>
        </Link>
        <div className='divider-nav' />

        <div className='dropdown'>
          <h1 className='nav-title-txt flex'>{t('ourServices')} <img className='ml-2' src='/img/down-arrow.svg' /></h1>
          <div className='dropdown-content'>
            <Link href='/mototaxi' onClick={handleOptionClick}>{t('motoTaxi')}</Link>
            <Link href='/vtc' onClick={handleOptionClick}>{t('vtc')}</Link>
            <Link href='/van' onClick={handleOptionClick}>{t('carProvision')}</Link>
          </div>
        </div>
        <div className='divider-nav' />

        <div className='dropdown'>
          <h1 className='nav-title-txt flex'>{t('reservation')} <img className='ml-2' src='/img/down-arrow.svg' /></h1>
          <div className='dropdown-content'>
            <Link href={'/motoservice'}
             onClick={handleOptionClick}>{t('motoTaxi')}</Link>
            <Link href={'/vtcservice'}
             onClick={handleOptionClick}>{t('vtc')}</Link>
          </div>
        </div>
        <div className='divider-nav' />

        <Link className='nav-title-txt' href="/#contact" onClick={handleOptionClick}>
          <h1>{t('contact')}</h1>
        </Link>
        <div className='divider-nav' />
      </div>
      </div>
      </div>
    </div>
  );
};

export default Header;

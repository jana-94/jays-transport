'use client';
import Link from 'next/link';
import Image from 'next/image';
import './header.css';
import { useLanguage } from '@/app/language/LanguageProvider';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
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
            <Link href='/'>{t('motoTaxi')}</Link>
            <Link href='/'>{t('vtc')}</Link>
          </div>
        </div>

        <Link className='nav-title' href='/'>
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
  );
};

export default Header;

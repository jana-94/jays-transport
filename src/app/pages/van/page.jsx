"use client";

import { useTranslation } from 'react-i18next';
export default function Van() {
  const { t } = useTranslation();
  return (
    <div className="flex bg-white flex-col w-full">
      <h1 className='title'>{t('carProvision')}</h1>
      <img className='banner-moto' src="/img/car1.jpg" alt="bike"/>
      <p className='moto-content'>{t('dayRental')}</p>
      <div className='book-now-button'>
      <button className='book-now'>{t('bookNow')}</button>
      </div>
      <div style={{height: '60px'}} />
    </div>
  );
}

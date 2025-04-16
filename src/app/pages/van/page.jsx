"use client";

import { useTranslation } from 'react-i18next';
import './van.css'
export default function Van() {
  const { t } = useTranslation();
  return (
    <div className="flex bg-white flex-col w-full">
      <h1 className='title'>{t('carProvision')}</h1>
      <img className='banner-moto' src="/img/car1.jpg" alt="bike"/>
      <p className='moto-content'>{t('dayRental')}</p>
      <button className='book-now'>{t('bookNow')}</button>
      <div style={{height: '60px'}} />
    </div>
  );
}

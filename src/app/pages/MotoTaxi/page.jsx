"use client";

import { useTranslation } from 'react-i18next';
import './mototaxi.css'
export default function MotoTaxi() {
  const { t } = useTranslation();
  return (
    <div className="flex bg-white flex-col w-full">
      <h1 className='title'>{t('motorcycleTaxi')}</h1>
      <img className='banner-moto' src="/img/bike.jpg" alt="bike"/>
      <h1 className='moto-heading'>{t('fleet')}</h1>
      <p className='moto-content'>{t('mototaxiUsage')}</p>
      <p className='moto-content'>{t('mototaxiCustom')}</p>
      <p className='moto-content'>{t('mototaxiSafety')}</p>
      <div className='book-now-button'>
      <button className='book-now'>{t('bookNow')}</button>
      </div>
      <div style={{height: '60px'}} />
    </div>
  );
}

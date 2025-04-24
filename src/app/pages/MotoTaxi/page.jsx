"use client";

import { useTranslation } from 'react-i18next';
import './mototaxi.css'
import Link from 'next/link';
export default function MotoTaxi() {
  const { t } = useTranslation();

  return (
    <div className="flex bg-white flex-col w-full">
      <h1 className='title'>{t('motorcycleTaxi')}</h1>
      <div className='banner-outline'>
      <img className='banner-moto' src="/img/bike_new.png" alt="bike"/>
      </div>
      <p className='moto-content'>{t('mototaxiUsage')}</p>
      <p className='moto-content'>{t('mototaxiCustom')}</p>
      <p className='moto-content'>{t('mototaxiSafety')}</p>
      <div className='book-now-button'>
      <Link className='book-now' href={'/motoservice'}>{t('bookNow')}</Link>
      </div>
      <div style={{height: '60px'}} />
    </div>
  );
}

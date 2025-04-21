"use client";

import { useTranslation } from 'react-i18next';
import './vtc.css'
export default function Vtc() {
  const { t } = useTranslation();
  return (
    <div className="flex bg-white flex-col w-full">
      <h1 className='title'>{t('vtc')}</h1>
      <img className='banner-moto' src="/img/berline.png" alt="bike"/>
      <p className='moto-content'>{t('vtcIntro')}</p>
      <h1 className='moto-heading'>{t('transportForIndividuals')}</h1>
      <p className='moto-content'>{t('individualServiceArea')}</p>
      <h1 className='moto-heading'>{t('availableFor')}</h1>
      <ul className='vtc-list'>
        <li className='moto-content'>{t('races')}</li>
        <li className='moto-content'>{t('stationAirportTransfers')}</li>
        <li className='moto-content'>{t('workplaceTravel')}</li>
        </ul>
        <h1 className='moto-heading'>{t('transportForProfessionals')}</h1>
        <p className='moto-content'>{t('proTripBenefits')}</p>
      <p className='moto-content'>{t('easyBooking')}</p>
      <div className='book-now-button'>
      <button className='book-now'>{t('bookNow')}</button>
      </div>
      <div style={{height: '60px'}} />
    </div>
  );
}

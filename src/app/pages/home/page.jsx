"use client";

import Metadata from "@/app/components/metaData/metaData";
import './home.css';
import MotoServices from "@/app/components/services/page";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <div className="flex bg-white flex-col items-center w-full">
      <Metadata
        title={"Jay's transport"}
        description={"Generated by Jay's transport"}
      />
      <div className="banner-container">
        <img className="banner-img" alt="banner" src="/img/banner.png" />
        <div className="banner-text">
          <p>{t('whereToGo')}</p>
          <h1>{t('serviceClass')}</h1>
        </div>
      </div>
      <div className="home-content">
        <h1>{t('introDescription')}</h1>
        <p>{t('fullRangeDescription')}</p>
      </div>
      <h1 className="vehicle-heading">{t('fleet')}</h1>
      <div className="vehicle-container">
        <div className="vehicle">
        <img src="/img/bike.jpg" alt="bike"/>
        <p>{t('motoTaxi')}</p>
        </div>
        <div className="vehicle">
        <img src="/img/berline.png" alt="berline"/>
        <p>{t('sedanSUV')}</p>
        </div>
        <div className="vehicle">
        <img src="/img/van.png" alt="van"/>
        <p>{t('van')}</p>
        </div>
      </div>
      <h1 className="vehicle-heading">{t('vtcTaxiServices')}</h1>
      <MotoServices />
      </div>
  );
}

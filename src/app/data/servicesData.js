import { useTranslation } from 'react-i18next';

export const useServicesData = () => {
    const { t } = useTranslation();
    return [
    {
        img: '/img/intercity.png',
        content: [`${t('bookingAllTrips')}`,
            `${t('pickupAnywhere')}`,
            `${t('regularTrips')}`,
            `${t('comfortSecure')}`],
        subContent: [],
        title: `${t('simpleTransfer')}`
    },
    {
        img: '/img/airport.png',
        content: [`${t('shuttleExperience')}`],
        subContent: [
            {
                content: `${t('stationTrips')}`,
            },
            {
                content: `${t('airportTrips')}`
            }
        ],
        title: `${t('shuttleTitle')}`
    },
    {
        img: '/img/showcase.png',
        content: [`${t('extendedBooking')}`,
            `${t('flexibleService')}`,
            `${t('dayUse')}`,
            `${t('customPricing')}`],
        subContent: [],
        title: `${t('availability')}`
    }
];
}
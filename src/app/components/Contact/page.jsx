'use client';

import { useTranslation } from 'react-i18next';
import './contact.css';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export const ContactForm = () => {
    const { t } = useTranslation();
    const searchParams = useSearchParams();
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState('');
    const [formData, setFormData] = useState({
        selectedService: `${t('motoTaxi')}`,
        name: '',
        serviceType: '',
        departure: '',
        destination: '',
        passengers: '',
        date: '',
        time: '',
        bags: '',
        email: '',
        mobile: '',
    });

    useEffect(() => {
        const service = searchParams.get('service');
        if (service) {
            setFormData({ ...formData, selectedService: service })
        }
    }, [searchParams]);


    const clearAllFormData = () => {
        const service = searchParams.get('service');
        setFormData({
            selectedService: service,
            name: '',
            serviceType: '',
            departure: '',
            destination: '',
            passengers: '',
            date: '',
            time: '',
            bags: '',
            email: '',
            mobile: '',
        });
    }


    const generateEmailTemplate = (formData) => {
        return `
          Hi, I'm ${formData.name}. I need ${formData.selectedService} service 
          from ${formData.departure} to ${formData.destination} 
          on ${formData.date} at ${formData.time}.
          Number of passengers: ${formData.passengers}, Bags: ${formData.bags}.
          You can contact me at Email: ${formData.email}, Mobile: ${formData.mobile}.
        `;
    };


    const onFormSubmit = async (e) => {
        e.preventDefault();
      
        const message = generateEmailTemplate(formData);
      
        try {
          setShowMessage('wait');
          setMessage('Please wait,.. Email sending inprogress!...');
      
          const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              message: message,
            }),
          });
      
          const data = await response.json();
      
          if (response.ok) {
            setShowMessage('success');
            setMessage('Email sent successfully!');
            clearAllFormData();
          } else {
            setShowMessage('error');
            setMessage(`Failed to send email: ${data.error}`);
            clearAllFormData();
          }
      
        } catch (err) {
          setShowMessage('error');
          setMessage(`Something went wrong`);
          clearAllFormData();
          console.log(`Something went wrong: ${err.message}`);
        }
      
        // ✅ Only reset message after delay — not forcefully set to error!
        setTimeout(() => {
          setShowMessage('');
          setMessage('');
        }, 3000);
      };
      

    return (
        <div className="contactOutline">
            <img className="contact-bg-img" src={t(`${formData.selectedService}`) == t('motoTaxi') ? "/img/bike_contact.png" : "/img/car_contact.png"} alt="background" />
            <form onSubmit={onFormSubmit} className="form">
                <h1 className="contactHeading">{t(`${formData.selectedService}`)}</h1>
                <h1 className="contact-title">{t('byPhone')}</h1>
                <p className="des">{t('callAt')}</p>
                <h2 className="formTitle">{t('fillTheForm')}</h2>
                <div className="row">
                    <div>
                        <label className="label">{t('typeOfReservation')}</label>
                        <select required className="input" value={`${t(formData.selectedService)}`} onChange={(e) => setFormData({ ...formData, selectedService: e.target.value })}>
                            <option value=''>{t('selectReservation')}...</option>
                            <option value={t('motoTaxi')}>{t('motoTaxi')}</option>
                            <option value={t('vtc')}>{t('vtc')}</option>
                        </select>
                    </div>
                    <div>
                        <label className="label">{t('yourName')}</label>
                        <input required placeholder={`${t('enterYourName')}`} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} type='text' className="input" />
                    </div>
                </div>
                <div className="row">

                    <div>
                        <label className="label">{t('depAddress')}</label>
                        <input required placeholder={`${t('enterAddress')}`} value={formData.departure} onChange={(e) => setFormData({ ...formData, departure: e.target.value })} type='text' className="input" />
                    </div>
                    <div>
                        <label className="label">{t('destAddress')}</label>
                        <input required type='text' placeholder={`${t('enterAddress')}`} value={formData.destination} onChange={(e) => setFormData({ ...formData, destination: e.target.value })} className="input" />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label className="label">{t('typeOfService')}</label>
                        <select required className="input" value={formData.serviceType} onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}>
                            <option value=''>{t('select')}...</option>
                            <option value={t('singleTrip')}>{t('singleTrip')}</option>
                            <option value={t('vehicleAtDes')}>{t('vehicleAtDes')}</option>
                        </select>
                    </div>

                    <div>
                        <label className="label">{t('noOfPassengers')}</label>
                        <input required type='text' placeholder={`${t('noOfPassPlaceHolder')}`} value={formData.passengers} onChange={(e) => setFormData({ ...formData, passengers: e.target.value })} className="input" />
                    </div>
                </div>

                <div className="row">
                    <div>
                        <label className="label">{t('pickDate')}</label>
                        <input required type='date' className="input" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
                    </div>
                    <div>
                        <label className="label">{t('pickupTime')}</label>
                        <input required type='time' className="input" value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} />
                    </div>
                </div>
                <div className="row">

                    <div>
                        <label className="label">{t('noOfBags')}</label>
                        <input type='text' placeholder={`${t('noOfBagsPlaceHolder')}`} value={formData.bags} onChange={(e) => setFormData({ ...formData, bags: e.target.value })} className="input" />
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <label className="label">{t('enterEmail')}</label>
                        <input required type='email' placeholder={t('enterEmail')} className="input" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                    <div>
                        <label className="label">{t('enterMobile')}</label>
                        <input required type='number' placeholder={t('enterMobile')} className="input" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
                    </div>
                </div>

                <p className="note">
                    <strong>{t('note')}</strong> {t('noteTxt')}
                </p>
                <div className='book-button'>

                    <button type='submit' className="button">
                        {t('bookNow')}
                    </button>
                </div>
                {showMessage && (
                    <div
                        className="messagetxtcon"
                        style={{
                            backgroundColor:
                                showMessage === 'success'
                                    ? 'green'
                                    : showMessage === 'wait'
                                        ? 'black'
                                        : 'red',
                            borderRadius: '12px',
                            padding: '12px 20px',
                            marginTop: '20px',
                            color: 'white',
                            textAlign: 'center',
                            transition: 'opacity 0.5s ease',
                        }}
                    >
                        <h1 className="messagetxt" style={{ fontSize: '16px', margin: 0 }}>
                            {message}
                        </h1>
                    </div>
                )}


            </form>
        </div>
    );
};

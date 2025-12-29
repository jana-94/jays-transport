'use client';

import { useTranslation } from 'react-i18next';
import './motoService.css';
import { useState } from 'react';

 const MotoService = () => {
    const { t } = useTranslation();
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        serviceType: '',
        departure: '',
        destination: '',
        date: '',
        time: '',
        email: '',
        mobile: '',
        description: '',
    });


    const clearAllFormData = () => {
        setFormData({
            name: '',
            serviceType: '',
            departure: '',
            destination: '',
            date: '',
            time: '',
            email: '',
            mobile: '',
            description: '',
        });
    }


    const generateEmailTemplate = (formData) => {
        return `
          ${t('Hi')} ${formData.name}. ${t('Ineed')} ${formData.serviceType} ${t('service')} 
          ${t('from')} ${formData.departure} ${t('to')} ${formData.destination} 
          ${t('on')} ${formData.date} ${t('at')} ${formData.time}.
          ${t('contactme')}: ${formData.email}, ${t('Mobile')}: ${formData.mobile}.
          ${formData.description?.length > 0 ? `${t('description')}: ${formData.description}` : ''}.
        `;
    };

      const onFormSubmit = async (e) => {
  e.preventDefault();

  // Determine if this is a booking or a contact message
  const type = 'booking';

  // Generate the appropriate message / booking details
  const message = undefined;

  const bookingDetails =  generateEmailTemplate(formData) 

  try {
    setShowMessage('wait');
    setMessage(`${t('pleasewait')}`);

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        type,               // new field
        message,            // only for contact
        bookingDetails,     // only for booking
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setShowMessage('success');
      setMessage(`${t('emailsent')}`);
      clearAllFormData();
    } else {
      setShowMessage('error');
      setMessage(`${t('emailfailed')}: ${data.error}`);
      clearAllFormData();
    }

  } catch (err) {
    setShowMessage('error');
    setMessage(`${t('somethingwrong')}`);
    clearAllFormData();
    console.log(`${t('somethingwrong')}: ${err.message}`);
  }

  // Reset message after delay
  setTimeout(() => {
    setShowMessage('');
    setMessage('');
  }, 3000);
};

      

    return (
        <div className='bg-white py-10 mt-12'>
        <div className="moto-service-Outline">
            <form onSubmit={onFormSubmit} className="form">
                <h1 className="moto-service-Heading">{t('motoTaxi')}</h1>
                <h1 className="moto-service-title">{t('byPhone')}</h1>
                <p className="des">{t('callAt')}</p>
                <h2 className="formTitle">{t('fillTheForm')}</h2>
                <div className="row">
                    <div>
                        <label className="label">{t('yourName')} <span style={{ color: 'red' }}>*</span></label>
                        <input required placeholder={`${t('enterYourName')}`} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} type='text' className="input" />
                    </div>
                    <div>
                        <label className="label">{t('typeOfService')} <span style={{ color: 'red' }}>*</span></label>
                        <select required className="input" value={formData.serviceType} onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}>
                            <option value=''>{t('select')}...</option>
                            <option value={t('singleTrip')}>{t('singleTrip')}</option>
                            <option value={t('vehicleAtDes')}>{t('vehicleAtDes')}</option>
                        </select>
                    </div>
                </div>
                <div className="row">

                    <div>
                        <label className="label">{t('depAddress')} <span style={{ color: 'red' }}>*</span></label>
                        <input required placeholder={`${t('enterAddress')}`} value={formData.departure} onChange={(e) => setFormData({ ...formData, departure: e.target.value })} type='text' className="input" />
                    </div>
                    <div>
                        <label className="label">{t('destAddress')} <span style={{ color: 'red' }}>*</span></label>
                        <input required type='text' placeholder={`${t('enterAddress')}`} value={formData.destination} onChange={(e) => setFormData({ ...formData, destination: e.target.value })} className="input" />
                    </div>
                </div>

                <div className="row">
                    <div>
                        <label className="label">{t('pickDate')} <span style={{ color: 'red' }}>*</span></label>
                        <input required type='date' className="input" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
                    </div>
                    <div>
                        <label className="label">{t('pickupTime')} <span style={{ color: 'red' }}>*</span></label>
                        <input required type='time' className="input" value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} />
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <label className="label">{t('enterEmail')} <span style={{ color: 'red' }}>*</span></label>
                        <input required type='email' placeholder={t('enterEmail')} className="input" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                    <div>
                        <label className="label">{t('enterMobile')} <span style={{ color: 'red' }}>*</span></label>
                        <input required type='number' placeholder={t('enterMobile')} className="input" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <label className="label">{t('description')} {t('ifany')}</label>
                        <textarea type='text' placeholder={t('enterDes')} className="input" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
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
        </div>
    );
};

export default MotoService;

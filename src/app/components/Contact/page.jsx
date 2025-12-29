'use client';

import { useTranslation } from 'react-i18next';
import './contact.css';
import { useEffect, useState } from 'react';

export const ContactForm = () => {
    const { t } = useTranslation();
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        description: '',
        email: '',
        mobile: '',
    });


    const clearAllFormData = () => {
        setFormData({
            firstName: '',
            lastName: '',
            description: '',
            email: '',
            mobile: '',
        });
    }


    const generateEmailTemplate = (formData) => {
        return `
          ${t('Hi')} ${formData.firstName} ${formData.lastName}.
          ${t('contactme')}: ${formData.email}, ${t('Mobile')}: ${formData.mobile}.
          ${t('description')}: ${formData.description}
        `;
    };

      const onFormSubmit = async (e) => {
  e.preventDefault();

  // Determine if this is a booking or a contact message
  const type = 'contact';

  // Generate the appropriate message / booking details
  const message = generateEmailTemplate(formData);

  const bookingDetails = undefined;

  try {
    setShowMessage('wait');
    setMessage(`${t('pleasewait')}`);

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.firstName + ' ' + formData.lastName,
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
        <div className="contactOutline">
            <form onSubmit={onFormSubmit} className="form">
                <h2 className="formTitle">{t('fillTheForm')}</h2>
                <div className="row">
                    <div>
                        <label className="label">{t('firstName')} <span style={{ color: 'red' }}>*</span></label>
                        <input required placeholder={`${t('entyourfirstname')}`} value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} type='text' className="input" />
                    </div>
                    <div>
                        <label className="label">{t('lastName')} <span style={{ color: 'red' }}>*</span></label>
                        <input required placeholder={`${t('entyourlastname')}`} value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} type='text' className="input" />
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
                        <label className="label">{t('description')} <span style={{ color: 'red' }}>*</span></label>
                        <textarea required type='text' placeholder={t('enterDes')} className="input" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                    </div>
                </div>
                <div className='book-button'>

                    <button type='submit' className="button">
                        {t('Submit')}
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

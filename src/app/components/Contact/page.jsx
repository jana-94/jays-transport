'use client';

import { useTranslation } from 'react-i18next';
import './contact.css';

export const ContactForm = () => {
    const { t } = useTranslation();
    return (
        <div className="contactOutline">
                <form className="form">
            <h1 className="contactHeading">{t('motoTaxi')}</h1>
            <h1 className="title">By phone:</h1>
            <p className="des">Call us at +33 (0)6 84 40 61 26, available from Monday to Sunday, including public holidays.</p>
                    <h2 className="formTitle">Fill the following details</h2>
                    <div className="row">

                    <div>
                        <label className="label">Type of Service</label>
                        <select required className="input">
                            <option value=''>Select...</option>
                            <option value='single'>Single Trip</option>
                            <option value='disposal'>Vehicle at Your Disposal</option>
                        </select>
                    </div>

                    <div>
                        <label className="label">Departure Address</label>
                        <input required placeholder='Enter address' type='text' className="input" />
                    </div>
                    </div>
                    <div className="row">

                    <div>
                        <label className="label">Destination Address</label>
                        <input required type='text' placeholder='Enter address' className="input" />
                    </div>

                    <div>
                        <label className="label">Number of Passengers & Age Group</label>
                        <input required type='text' placeholder='e.g., 3 adults, 1 child' className="input" />
                    </div>
                    </div>

                    <div className="row">
                        <div>
                            <label className="label">Date of Pick-up</label>
                            <input required type='date' className="input" />
                        </div>
                        <div>
                            <label className="label">Time of Pick-up</label>
                            <input required type='time' className="input" />
                        </div>
                    </div>
                    <div className="row">

                    

                    <div>
                        <label className="label">Number of Bags (if any)</label>
                        <input type='text' placeholder='e.g., 2 medium bags' className="input" />
                    </div>

                    <div>
                        <label className="label">Your Email or Phone Number</label>
                        <input required type='text' className="input" />
                    </div>
                    </div>

                    <p className="note">
                        <strong>Note:</strong> A fixed-rate price will be sent to you by email or SMS for your VTC or motorcycle taxi ride.
                    </p>

                    <button type='submit' className="button">
                        {t('bookNow')}
                    </button>
                </form>
        </div>
    );
};

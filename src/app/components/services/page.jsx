'use client';
import { useServicesData } from '@/app/data/servicesData';
import './services.css';

const OurServices = () => {
const servicesData = useServicesData();
    return (
        <>
            <div style={{ height: '40px' }} />
            <div className="moto">
                {servicesData.map((item, itm) =>
                    <div key={itm} className="moto-outline">
                        <img className="moto-img" src={item.img} alt="moto-services" />
                        <h1>{item.title}</h1>
                        <div style={{ padding: '20px', paddingTop: '0px' }}>
                            {item.content.map((i,ie) => <p key={ie}>{i}</p>)}
                            <ul className="inline-list" style={{ padding: '40px', paddingTop: '0px'}}>
                            {item.subContent.length > 0 && item.subContent.map((i, index) =>
                                    <li key={index}>
                                        {i.content}
                                    </li>
                            )}
                            </ul>
                        </div>
                    </div>
                )
                }
            </div>
        </>
    )
}

export default OurServices;
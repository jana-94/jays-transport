import { servicesData } from "@/app/data/servicesData";
import './services.css';

const MotoServices = () => {
    return (
        <>
            <div style={{ height: '40px' }} />
            <div className="moto">
                {servicesData.map(item =>
                    <div className="moto-outline">
                        <img className="moto-img" src={item.img} alt="moto-services" />
                        <h1>{item.title}</h1>
                        <div style={{ padding: '20px', paddingTop: '0px' }}>
                            {item.content.map(i => <p>{i}</p>)}
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
            <div style={{ height: '60px' }} />
        </>
    )
}

export default MotoServices;
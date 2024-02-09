import { useState, useEffect } from 'react';
import axios from 'axios'
import { Paths } from './AccordianData';
import './Accordian.css'

const Accordian = () => {

    const [accordionData, setAccordionData] = useState([]);
    const [openAccordion, setOpenAccordion] = useState(null);
    const [setIsError] = useState("");

    const accordionFAQ = async () => {
        try {
            const response = await Paths.EndpointsURL.HomeUsers;
            axios({
                url: response,
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                },
            }).then((record) => {
                setAccordionData(record.data.users);
                // console.log("Testing" + record);
            });
        } catch (error) {
            setIsError(error.msg);
            //console.log(error.msg);
        }
    };

    useEffect(() => {
        accordionFAQ();
    }, []);

    const handleAccordionClick = (index) => {
        setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
    }

    return (
        <>
            <section className="allfaq_accordian_section">
                <div className="container">
                    <div className="accordian_title">
                        <h3>Frequently Asked Questions</h3>
                        <p>Our trail of achievements and recognitions that define our journey.</p>
                    </div>
                    {accordionData.slice(0, 7).map((item, index) => (
                        <div key={index} className="allfaq_accordion-item">
                            <div
                                className={`allfaq_accordion-header ${openAccordion === index ? "open" : ""
                                    }`}
                                onClick={() => handleAccordionClick(index)}
                            >
                                {item.firstName}
                                <span className="allfaq_accordion-icon">
                                    {openAccordion === index ? "-" : "+"}
                                </span>
                            </div>
                            {openAccordion === index && (
                                <div
                                    className="allfaq_accordion-content"
                                    dangerouslySetInnerHTML={{ __html: item.maidenName }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Accordian

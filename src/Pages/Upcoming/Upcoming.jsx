import './Upcoming.css'
import anemia from '/images/upcoming/anemia.png'
import instrument from '/images/upcoming/instrument.png'
import nutrious from '/images/upcoming/nutrious.png'

const Upcoming = () => {
    return (
        <>
            <section className="upcoming_section">
                <div className="container">
                    <div className="upcoming_title">
                        <h2>Topics of the upcoming Webinars </h2>
                        <p>Exclusive Webinar topics for undergraduate students</p>
                    </div>
                    <div className="upcoming_card">
                        <div className='upcoming_item_card'>
                            <div className="upcoming_img">
                                <img src={anemia} alt="" />
                                <div className="overlay">
                                    <div className="upcoming_content">
                                        <h3>Anemia in Pregnancy</h3>
                                        <p>Consists of brief coverage of important topics of the subject, facilitate with Terminologies</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='upcoming_item_card'>
                            <div className="upcoming_img">
                                <img src={instrument} alt="" />
                                <div className="overlay">
                                    <div className="upcoming_content">
                                        <h3>Instruments used in surgery</h3>
                                        <p>At the end of every unit Golden points are given to help in recapitalization of the unit</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='upcoming_item_card'>
                            <div className="upcoming_img">
                                <img src={nutrious} alt="" />
                                <div className="overlay">
                                    <div className="upcoming_content">
                                        <h3>Nutritious Diet control</h3>
                                        <p>High weightage Long/Short/very short ques are covered with their detailed answers 
                                            which will ensure in thorough conceptual building of the topic</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Upcoming

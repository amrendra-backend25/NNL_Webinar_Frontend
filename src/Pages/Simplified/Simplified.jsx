import './Simplified.css'


const Simplified = () => {
    return (
        <>
            <section className="simplified_section">
                <div className="container">
                    <div className="simplified_parent">
                        <div className="simplified_title">
                            <p className='simplified_link'>#NursingUGsimplified</p>
                            <p className='simplified_para'>Raising the Bar in Nursing Education</p>
                            <div className="simplified_list">
                                <ul>
                                    <li>Are you struggling to study smartly?</li>
                                    <li>Do you study hard, but still unable to score good marks?</li>
                                    <li>Do you fail to properly present the answers despite having knowledge </li>
                                    <li>about the topic?</li>
                                </ul>
                            </div>
                            <p className='simplified_ques'>If you said <span>YES</span> to any of the above questions then this webinar is for <span>YOU.</span></p>

                            <p className='simplified_detail'>This LIVE Webinar give you a detailed conceptual revision of high yielding topics & provide you knowledge in a
                                clear & simple way. Get a rapid review of the topic through flowcharts, mnemonics, Visual Aids including charts, graphs,
                                and illustrations to enhance comprehension.</p>
                        </div>
                       
                        <div className="register_form_right">
                            <div className="register_form_title">
                                <h2>Get Yourself Registered !</h2>
                                <p>Submit the form below and register for live Nursing Next Live Webinar</p>
                            </div>
                            <form action="" >
                                <div className="inputs">
                                    <div className="input_form">
                                        <input
                                            type="text"
                                            placeholder="Name*"
                                            name="fullName"
                                            id="fullName"
                                        // onChange={handleChange}
                                        // value={registrationForm.fullName}
                                        // autoComplete="Off"
                                        />
                                        {/* {isError.fullName && (
                                        <p className="error">{isError.fullName}</p>
                                    )} */}
                                    </div>
                                    <div className="input_form">
                                        <input
                                            type="text"
                                            placeholder="Phone*"
                                            name="fullName"
                                            id="fullName"
                                        // onChange={handleChange}
                                        // value={registrationForm.fullName}
                                        // autoComplete="Off"
                                        />
                                        {/* {isError.fullName && (
                                        <p className="error">{isError.fullName}</p>
                                    )} */}
                                    </div>
                                    <div className="input_form">
                                        <input
                                            type="text"
                                            placeholder="Email*"
                                            name="fullName"
                                            id="fullName"
                                        // onChange={handleChange}
                                        // value={registrationForm.fullName}
                                        // autoComplete="Off"
                                        />
                                        {/* {isError.fullName && (
                                        <p className="error">{isError.fullName}</p>
                                    )} */}
                                    </div>
                                    <div className="textarea_form">
                                        <textarea type="text" placeholder='Message*' ></ textarea>
                                        {/* {isError.fullName && (
                                        <p className="error">{isError.fullName}</p>
                                    )} */}
                                    </div>
                                    <div className="submit_register">
                                        <button className="submit_btn" type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Simplified

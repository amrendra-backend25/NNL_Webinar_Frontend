import "./Decode.css";
import WebinarModel from "../WebinarModel/WebinarModel";
import { useState, useEffect } from "react";
import { Paths } from "../../config/BaseApi";
import axios from "axios";
const Decode = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState({});
  const [successMantraApi, setSuccessMantraApi] = useState([]);
  const [setIsError] = useState("");
  const openModal = () => {
    setSelectedFaculty();
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const showSuccessMantra = async () => {
    try {
      const response = await Paths.EndpointsURL.SuccessMantra;
      const record = await axios.get(response, {
        headers: {
          "Content-type": "application/json",
        },
      });
      //console.log(record.data.data);
      return record.data.data;
    } catch (error) {
      setIsError(error.msg);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [successMantraData] = await Promise.all([showSuccessMantra()]);
        setSuccessMantraApi(successMantraData);
      } catch (error) {
        setIsError(error.msg);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {successMantraApi.slice(0, 1).map((mantra) => {
        const {
          topic,
          date,
          time,
          day,
          sessionMentors,
          language,
          duration,
          backgroundImage,
        } = mantra;
        return (
          <>
            <section
              className="decode_success_section"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            >
              <div className="container">
                <div className="decode_heading">
                  <h2>Dcode Success Mantra Webinar</h2>
                  <p>
                    Nursing Next live in association with Target High Brings to
                    you a series of live webinar to make your nursing topic easy
                  </p>
                </div>

                <div className="topic_parent">
                  <div className="left_topic">
                    <h3 className="topic_content_head">Topic: {topic}</h3>
                    <p className="topic_date">
                      {date} | {day} | {time}
                    </p>
                    <p className="topic_mentor">
                      Session Mentor : {sessionMentors}
                    </p>
                    <p className="topic_language">{language}</p>
                    <p className="topic_hour">{duration}</p>
                  </div>
                  <div className="right_topic" onClick={() => openModal()}>
                    <button>Register Now!</button>
                  </div>
                </div>
                <WebinarModel
                  isOpen={modalOpen}
                  onClose={closeModal}
                  person={selectedFaculty}
                />
                <div className="topic_note">
                  <p className="para_note">
                    *Note: <b>HURRY UP!</b> Limited Seats available | 1000+
                    Minded nursing undergraduates around the country
                  </p>
                </div>
              </div>
            </section>
          </>
        );
      })}
    </>
  );
};

export default Decode;

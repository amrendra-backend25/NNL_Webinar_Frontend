import "./Topic.css";
import { useState, useEffect } from "react";
import WebinarModel from "../WebinarModel/WebinarModel";
import { FaCheck } from "react-icons/fa";
import { Paths } from "../../config/BaseApi";
import axios from "axios";
import Timer from "../Timer/Timer";
const Topic = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState({});
  const [topicApi, setTopicApi] = useState([]);
  const [setIsError] = useState("");
  const openModal = () => {
    setSelectedFaculty();
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const showTopic = async () => {
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
        const [topicData] = await Promise.all([showTopic()]);
        setTopicApi(topicData);
      } catch (error) {
        setIsError(error.msg);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="topic_section">
        <div className="container">
          {topicApi.slice(0, 1).map((result) => {
            const { topic, date, time, day, subject, description } = result;
            const sentences = description.split(". ");
            return (
              <>
                <div className="topic_title">
                  <div className="topic_left">
                    <div className="topic_left_sub_title">
                      <div className="sub_title_icon_left">
                        <span>
                          <i className="bi bi-calendar-check"></i>
                        </span>
                      </div>
                      <div className="sub_title_icon_right">
                        <h3 className="topic_infection_line">Topic: {topic}</h3>
                        <p className="date_line">
                          {date} | {day} | {time}
                        </p>
                        <div className="booking_div">
                          <div className="booking_icon_line">
                            <i className="bi bi-person"></i>
                          </div>
                          <div className="booking_btn">
                            <button>
                              <Timer />{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="topic_left_sub_title">
                      <div className="sub_title_icon_left">
                        <span>
                          <i className="bi bi-calendar-check"></i>
                        </span>
                      </div>
                      <div className="sub_title_icon_right">
                        <h3 className="topic_infection">Topic: {topic}</h3>
                        <p className="date_noline">
                          {date} | {day} | {time}
                        </p>
                        <div className="booking_div">
                          <div className="booking_icon_line">
                            <i className="bi bi-person"></i>
                            <i className="bi bi-person"></i>
                            <i className="bi bi-person"></i>
                          </div>
                          <div className="booking_btn">
                            <button>Filling Fast..</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="down_line">
                      <p>
                        <b>Note:</b> We have limited seats hurry all seats are
                        book
                      </p>
                    </div>
                  </div>
                  <div className="topic_right">
                    <div className="topic_right_sub_title">
                      <h2 className="infection_right">Topic: {topic}</h2>
                      <h3 className="topic_sub">Sub: {subject}</h3>
                    </div>
                    <div className="topic_para">
                      <p className="topic_date">
                        Learn LIVE From Home at:
                        <br /> <br />
                        {date} | {day} | {time}
                      </p>
                      <p className="topic_price">
                        <span>₹499</span> Free
                      </p>
                    </div>
                    <div className="div_item">
                      <ul>
                        {sentences.map((record) => {
                          return (
                            <>
                              <li>
                                <FaCheck className="green_icon" /> {record}
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="register_btn" onClick={() => openModal()}>
                      <button>register now!</button>
                    </div>

                    <WebinarModel
                      isOpen={modalOpen}
                      onClose={closeModal}
                      person={selectedFaculty}
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Topic;

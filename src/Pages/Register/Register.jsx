import "./Register.css";
import ReactPlayer from "react-player";
//import simplify from "/images/video/simplified.png";
import { useState, useEffect } from "react";
import { Paths } from "../../config/BaseApi";
import axios from "axios";
const Register = () => {
  const [successVideoApi, setSuccessVideoApi] = useState([]);
  const [setIsError] = useState("");
  const showSuccessVideo = async () => {
    try {
      const response = await Paths.EndpointsURL.SessionVideos;
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
        const [successMantraData] = await Promise.all([showSuccessVideo()]);
        setSuccessVideoApi(successMantraData);
      } catch (error) {
        setIsError(error.msg);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <section className="webinar_register_section">
        <div className="container">
          <div className="register_main">
            <div className="register_content_left">
              <h3>How is the webinar going to help you ?</h3>
              <ul>
                <li>
                  A detailed conceptual revision of high yielding topics from
                  the Target High Next Nursing Decode book
                </li>
                <li>Provides knowledge in a clear, simple format</li>
                <li>
                  Rapid review of the topic is assisted by providing flowcharts,
                  line diagram and mnemonics{" "}
                </li>
                <li>
                  Visual Aids including charts, graphs, and illustrations to
                  enhance comprehension
                </li>
                <li>
                  Easy-to-understand examples are provided to facilitate
                  conceptual building of the topics
                </li>
              </ul>
            </div>
            {successVideoApi.slice(0, 1).map((video) => {
              const { videoLink } = video;
              return (
                <>
                  <div className="simplified_right_video">
                    <ReactPlayer
                      width="150%"
                      height="40vh"
                      radius="10px"
                      controls
                      url={videoLink}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;

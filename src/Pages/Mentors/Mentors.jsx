import "./Mentors.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import { Paths } from "../../config/BaseApi";
import axios from "axios";
const Mentors = () => {
  const [mentorApi, setMentorApi] = useState([]);
  const [setIsError] = useState("");
  const showMentor = async () => {
    try {
      const response = await Paths.EndpointsURL.WebinarMentors;
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
        const [mentorsData] = await Promise.all([showMentor()]);
        setMentorApi(mentorsData);
      } catch (error) {
        setIsError(error.msg);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <section className="mentor_section">
        <div className="container">
          <div className="mentor_title">
            <h2>Our Session Mentors for the Webinars</h2>
            <p>
              Our Teaching Experts are here to guide you at every step of the
              preparation, enabling you to run the course well and crack the
              entrance exam.
            </p>
          </div>
          <div className="master_slider_main">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              navigation={{
                nextEl: ".button-prev-slide",
                prevEl: ".button-next-slide",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
              breakpoints={{
                // When window width is >= 768px
                300: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                450: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                // When window width is >= 768px
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                // When window width is >= 1024px
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {mentorApi.map((result, index) => {
                const { mentorName, mentorSubject, mentorImage } = result;
                return (
                  <>
                    <SwiperSlide key={index.id}>
                      <div className="mastermind_card">
                        <div className="mastermind_img">
                          <img src={mentorImage} alt="" />
                          <div className="overlay">
                            <div className="content">
                              {/* <p>Mastermind</p> */}
                              <p>{mentorSubject}</p>
                            </div>
                          </div>
                        </div>
                        <div className="mastermind_title">
                          <h4>{mentorName}</h4>
                          {/* <p>{mentorSubject}</p> */}
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}

              <div className="mentor_button">
                <div className="button_right">
                  <div className="button-prev-slide">
                    <IoIosArrowForward />
                  </div>
                  <div className="button-next-slide">
                    <IoIosArrowBack />
                  </div>
                </div>
                {/* <div className="button_left">See All</div> */}
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mentors;

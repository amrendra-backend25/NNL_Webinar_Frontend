import { Link } from "react-router-dom";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Mission from "../Mission/Mission";
import Decode from "../Decode/Decode";
import Register from "../Register/Register";
import Simplified from "../Simplified/Simplified";
import Mentors from "../Mentors/Mentors";
import Upcoming from "../Upcoming/Upcoming";
import Topic from "../Topic/Topic";
import BookRegister from "../BookRegister/BookRegister";
import Expert from "../Expert/Expert";
import OurLearners from "../OurLearners/OurLearners";
import Accordian from "../Accordian/Accordian";
import Previous from "../Previous/Previous";
import { useState, useEffect } from "react";
import { Paths } from "../../config/BaseApi";
import axios from "axios";
import WebinarModel from "../WebinarModel/WebinarModel";
const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState({});
  const [homeBannerApi, setHomeBannerApi] = useState([]);
  const [setIsError] = useState("");
  const openModal = () => {
    setSelectedFaculty();
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const showHomeBanner = async () => {
    try {
      const response = await Paths.EndpointsURL.HomeBanner;
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
        const [BannerData] = await Promise.all([showHomeBanner()]);
        setHomeBannerApi(BannerData);
      } catch (error) {
        setIsError(error.msg);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="webinar_banner_section">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".button-prev-slide",
            prevEl: ".button-next-slide",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          breakpoints={{
            // When window width is >= 768px
            300: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            450: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            // When window width is >= 768px
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            // When window width is >= 1024px
            1024: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <div className="hero">
              {homeBannerApi.slice(0, 1).map((banner) => {
                const { bannerImage } = banner;
                return (
                  <>
                    <div className="mask">
                      <img
                        className="intro_img"
                        src={bannerImage}
                        alt="IntroImg"
                      />
                    </div>
                  </>
                );
              })}

              <div className="container">
                <div className="content">
                  <p className="hero_subtitle">
                    Attention BSc Nursing Undergrads!
                  </p>
                  <h2 className="heading_title">
                    Are you striving for Success in your UG Exams?
                  </h2>
                  <p className="hero_para">
                    Ignite the flame to excel with our Target High Next Nursing
                    Decode Webinars
                  </p>
                  <Link className="hero_link"># NursingUGsimplified</Link>
                  <div className="hero_btn" onClick={() => openModal()}>
                    <button>Join Weekly LIVE Webinars</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="swiper_button">
            <div className="button-prev-slide">
              <IoIosArrowForward />
            </div>
            <div className="button-next-slide">
              <IoIosArrowBack />
            </div>
          </div>
          <WebinarModel
            isOpen={modalOpen}
            onClose={closeModal}
            person={selectedFaculty}
          />
        </Swiper>
      </section>

      <Mission />
      <Decode />
      <Register />
      <Mentors />
      <Simplified />
      <Upcoming />
      <Topic />
      <BookRegister />
      <Expert />
      <OurLearners />
      <Accordian />
      <Previous />
    </>
  );
};

export default Hero;

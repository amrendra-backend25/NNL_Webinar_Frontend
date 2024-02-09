import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './OurLearners.css'
import riya from '/images/nextian/riya.png'

const OurLearners = () => {
  return (
    <>
      <section className="our_learners_section">
        <div className="container">
          <div className="our_learners_head">
            <h1>What our learners say about us</h1>
          </div>
        </div>
      </section>
      <section className="our_nextian_section">
        <div className="container">
          <div className="our_learners_title">
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              navigation={{
                nextEl: ".button-prev-slide",
                prevEl: ".button-next-slide",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false
              }}
              loop={true}
              modules={[Navigation, Autoplay, Pagination]}
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
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                // When window width is >= 1024px
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            }}
            >
              <SwiperSlide>
                <div className="learner_card">
                  <div className="learner_img">
                    <img src={riya} alt="" />
                  </div>
                  <div className="learner_content">
                    <h4>riya ghosh</h4>
                    <h6><span>AIR 1</span> NORCET 2023</h6>
                    <p>I have achieved AIR 27 in NORCET 2022 and NURSING NEXT LIVE has made my dream of
                      working in AIIMS come true. I would highly recommend this app to NORCET aspirants
                      because the content provided on this platform is authentic, updated, and is taught by
                      the subject experts.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="learner_card">
                  <div className="learner_img">
                    <img src={riya} alt="" />
                  </div>
                  <div className="learner_content">
                    <h4>riya ghosh</h4>
                    <h6><span>AIR 1</span> NORCET 2023</h6>
                    <p>I have achieved AIR 27 in NORCET 2022 and NURSING NEXT LIVE has made my dream of
                      working in AIIMS come true. I would highly recommend this app to NORCET aspirants
                      because the content provided on this platform is authentic, updated, and is taught by
                      the subject experts.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="learner_card">
                  <div className="learner_img">
                    <img src={riya} alt="" />
                  </div>
                  <div className="learner_content">
                    <h4>riya ghosh</h4>
                    <h6><span>AIR 1</span> NORCET 2023</h6>
                    <p>I have achieved AIR 27 in NORCET 2022 and NURSING NEXT LIVE has made my dream of
                      working in AIIMS come true. I would highly recommend this app to NORCET aspirants
                      because the content provided on this platform is authentic, updated, and is taught by
                      the subject experts.</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>


    </>
  )
}

export default OurLearners

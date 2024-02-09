import './Expert.css'
import video1 from '/images/expert/video01.png'
// import video2 from '/images/expert/video02.png'
// import video3 from '/images/expert/video03.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay, } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Expert = () => {
    return (
        <>
            <section className="expert_section">
                <div className="container">
                    <div className="expert_title">
                        <h2>Recommended by Expert</h2>
                        <p>Know Their personal experiences</p>
                    </div>
                    <div className="expert_video">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={3}
                            navigation={{
                                nextEl: ".button-prev-slide",
                                prevEl: ".button-next-slide",
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false
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
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                // When window width is >= 768px
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                // When window width is >= 1024px
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="expert_content">
                                    <img src={video1} alt="" />
                                    <div className="expert_heading">
                                        <h3 className='expert_name'>Ms Sabina Ali</h3>
                                        <p className='expert_desc'>Nursing Foundations</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="expert_content">
                                    <img src={video1} alt="" />
                                    <div className="expert_heading">
                                        <h3 className='expert_name'>Ms Sabina Ali</h3>
                                        <p className='expert_desc'>Nursing Foundations</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="expert_content">
                                    <img src={video1} alt="" />
                                    <div className="expert_heading">
                                        <h3 className='expert_name'>Ms Sabina Ali</h3>
                                        <p className='expert_desc'>Nursing Foundations</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="expert_content">
                                    <img src={video1} alt="" />
                                    <div className="expert_heading">
                                        <h3 className='expert_name'>Ms Sabina Ali</h3>
                                        <p className='expert_desc'>Nursing Foundations</p>
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

export default Expert

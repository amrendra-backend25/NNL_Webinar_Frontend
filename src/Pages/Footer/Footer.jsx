import './Footer.css'
import { RiFacebookBoxFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill, RiYoutubeFill, } from 'react-icons/ri'
// import appstore from '/images/footer/app_store.png'
// import desktop from '/images/footer/desktop.png'

const Footer = () => {
  return (
    <>
      <section className="footer_section">
        <div className="container">
          <div className="footer_title_parent">
            <div className="footer_left_social">
              <ul>
                <li><a href=""><RiFacebookBoxFill /></a></li>
                <li><a href=""><RiInstagramFill /></a></li>
                <li><a href=""><RiTwitterFill /></a></li>
                <li><a href=""><RiYoutubeFill /></a></li>
                <li><a href=""><RiLinkedinFill /></a></li>
              </ul>
            </div>
            <div className="footer_right_child">
              <div className="img_app">
                {/* <img src={appstore} alt="" className='app_store' /> */}
                {/* <img src={desktop} alt="" /> */}
              </div>
            </div>
          </div>
          <div className="underline"></div>
          <div className="copyright">
            <ul>
              <p>© 2021 Nursing Next Live</p>
              <li><a href="">privacy</a></li>
              <li><a href="">terms & conditions</a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer

import './Previous.css'
import preview from '/images/previous/preview.png'

const Previous = () => {
  return (
    <section className='previous_webinar_section'>
        <div className="container">
            <div className="previous_title">
                <h2>Our previous webinar session</h2>
                <p>Exclusive Webinar topics for undergraduate students</p>
            </div>
            <div className="previous_mask">
              <img className='previous_img' src={preview} alt="IntroImg" />
            </div>
        </div>
    </section>
  )
}

export default Previous

import "./BookRegister.css";
import bookstore from "/images/book/bookstore.png";
import { useState } from "react";
import WebinarModel from "../WebinarModel/WebinarModel";
const BookRegister = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState({});
  const openModal = () => {
    setSelectedFaculty();
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <section className="bookstore_section">
        <div className="container">
          <div className="bookstore_part">
            <div className="bookstore_left">
              <h2>
                Enroll in the WEBINAR & Get a Chance to win TH Next Decode Book!
              </h2>
              <h3>LUCKY DRAW AFTER WEBINAR</h3>
              <p>3 Lucky winners will get free TH Next Decode</p>
              <div className="bookstore_btn" onClick={() => openModal()}>
                <button>Register Now!</button>
              </div>
            </div>

            <div className="bookstore_right">
              <img src={bookstore} alt="" />
            </div>
            <WebinarModel
              isOpen={modalOpen}
              onClose={closeModal}
              person={selectedFaculty}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BookRegister;

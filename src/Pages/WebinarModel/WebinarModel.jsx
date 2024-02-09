import { AiOutlineExclamationCircle } from "react-icons/ai";
import axios from "axios";
import { useState } from "react";
import { Paths } from "../../config/BaseApi";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const WebinarModel = ({ isOpen, onClose }) => {
  const [registrationForm, setRegistrationForm] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    currentCity: "",
    coursePursued: "",
    otherCourse: "",
  });
  const navigate = useNavigate();
  const [isError, setIsError] = useState([]);
  //   const navigate = useNavigate();
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegistrationForm({ ...registrationForm, [name]: value });
    setIsError({ ...isError, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    if (!registrationForm.fullName.trim()) {
      newErrors.fullName = "Name is Required";
      isValid = false;
    }
    if (!registrationForm.contactNumber.trim()) {
      newErrors.contactNumber = "Contact Number is Required";
      isValid = false;
    }
    if (!registrationForm.email.trim()) {
      newErrors.email = "Email is Required";
      isValid = false;
    }
    if (!registrationForm.currentCity.trim()) {
      newErrors.currentCity = "City is Required";
      isValid = false;
    }
    if (!registrationForm.coursePursued.trim()) {
      newErrors.coursePursued = "Please Select Course";
      isValid = false;
    }
    setIsError(newErrors);
    return isValid;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newRegistrationForm = { ...registrationForm, id: new Date() };
    // console.log("Request Payload:", newRegistrationForm);
    if (validateForm()) {
      try {
        const response = await Paths.EndpointsURL.RegistrationForm;
        const res = await axios({
          url: response,
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          data: JSON.stringify(newRegistrationForm),
        });
        setRegistrationForm(res.data.data);
        //console.log(res);
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 1000,
        });
        setRegistrationForm({
          fullName: "",
          contactNumber: "",
          email: "",
          currentCity: "",
          coursePursued: "",
          otherCourse: "",
        });
        navigate("/thank-you/success");
      } catch (error) {
        toast.error("Error uploading data:", error);
      }
    }
  };

  return (
    <>
      <div
        className={`webinar_modal ${isOpen ? "show" : ""}`}
        onClick={onClose}
      >
        <div className="webinar_modal_content" onClick={handleModalClick}>
          <div className="webinar_modal_header">
            <span className="webinar_modal_close" onClick={onClose}>
              &times;
            </span>
          </div>
          <div className="webinar_model_form">
            <div className="webinar_model_title">
              <h2>Nursing Next Live Webinar Series</h2>
              <p>
                <span>
                  <AiOutlineExclamationCircle />
                </span>
                2 hrs Live Webinar{" "}
              </p>
            </div>
            <form action="" onSubmit={handleFormSubmit}>
              <div className="inputs">
                <div className="input_form">
                  <input
                    type="text"
                    placeholder="Full Name*"
                    name="fullName"
                    id="fullName"
                    onChange={handleChange}
                    value={registrationForm.fullName}
                    autoComplete="Off"
                  />
                  {isError.fullName && (
                    <p className="error">{isError.fullName}</p>
                  )}
                </div>
                <div className="input_form">
                  <input
                    type="phone"
                    placeholder="Contact Number*"
                    name="contactNumber"
                    id="contactNumber"
                    onChange={handleChange}
                    value={registrationForm.contactNumber}
                    autoComplete="Off"
                  />
                  {isError.contactNumber && (
                    <p className="error">{isError.contactNumber}</p>
                  )}
                </div>
                <div className="input_form">
                  <input
                    type="email"
                    placeholder="Email*"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={registrationForm.email}
                    autoComplete="Off"
                  />
                  {isError.email && <p className="error">{isError.email}</p>}
                </div>
                <div className="input_form">
                  <input
                    type="text"
                    placeholder="Current City*"
                    name="currentCity"
                    id="currentCity"
                    onChange={handleChange}
                    value={registrationForm.currentCity}
                    autoComplete="Off"
                  />
                  {isError.currentCity && (
                    <p className="error">{isError.currentCity}</p>
                  )}
                </div>

                <div className="input_form">
                  <select
                    name="coursePursued"
                    id="coursePursued"
                    className="form_control"
                    onChange={handleChange}
                    value={registrationForm.coursePursued}
                    autoComplete="Off"
                  >
                    <option value="" disabled selected>
                      Course Pursued*
                    </option>
                    <option value="GNM">GNM</option>
                    <option value="Post Basic">Post Basic</option>
                    <option value="BSc">BSc</option>
                    <option value="MSc">MSc</option>
                    <option value="Other">Other</option>
                  </select>
                  {isError.coursePursued && (
                    <p className="error">{isError.coursePursued}</p>
                  )}
                </div>
                {/* Additional input box for "Other" option */}
                {registrationForm.coursePursued === "Other" && (
                  <div className="input_form">
                    <input
                      type="text"
                      placeholder="Other Course"
                      name="otherCourse"
                      id="otherCourse"
                      onChange={handleChange}
                      value={registrationForm.otherCourse}
                      autoComplete="Off"
                    />
                  </div>
                )}
                <div className="submit_container">
                  <button className="submit" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default WebinarModel;

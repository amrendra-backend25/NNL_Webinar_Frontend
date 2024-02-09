const base = "/jsx";
//const baseURL = "http://localhost:9000/api/v1/";
const baseURL = "http://43.205.148.119:9000/api/v1/";

const baseRoute = "/";
const imageURL = "https://images.com";

export const Paths = {
  Home: base,
  LearningPath: baseRoute + "Learning",
  EndpointsURL: {
    HomeBanner: baseURL + "all/home/banner",
    RegistrationForm: baseURL + "form",
    WebinarQueryForm: baseURL + "query/form",
    PoweredBy: baseURL + "all/powered",
    SuccessMantra: baseURL + "all/success/mantra",
    SessionVideos: baseURL + "all/session/video",
    WebinarMentors: baseURL + "all/mentor",
  },
  imagePathURL: {
    URL: imageURL,
  },
};

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import { lazy, Suspense, useEffect, useState } from "react";
const ThankYou = lazy(() => import("./Pages/ThankYou/ThankYou"));
const Hero = lazy(() => import("./Pages/Banner/Hero"));
const Footer = lazy(() => import("./Pages/Footer/Footer"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
function App() {
  const [showLazyTime, setShowLazyTime] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLazyTime(true);
    }, []);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <Router>
      <Suspense
        fallback={
          <div style={{ margin: "350px", textAlign: "center" }}>
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        }
      >
        {showLazyTime && <Navbar />}
        <Routes>
          <Route path="/" element={showLazyTime && <Hero />} />
          <Route
            path="/thank-you/:registrationStatus"
            element={showLazyTime && <ThankYou />}
          />
        </Routes>
        {showLazyTime && <Footer />}
      </Suspense>
    </Router>
  );
}

export default App;

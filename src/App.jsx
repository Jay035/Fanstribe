import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Partnerships = lazy(() => import("./pages/Partnerships"));
const Events = lazy(() => import("./pages/Events"));
const Activities = lazy(() => import("./pages/Activities"));

function App() {
  return (
    <div className="scroll-smooth bg-[#06070B] text-white/90 h-full w-full">
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/events" element={<Events />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 3500,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
};

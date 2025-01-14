import { Link } from "react-router-dom";
import heroImg from "../assets/hero-img.jpg";

export function HeroSection() {
  return (
    <section className="relative grid w-full md:items-center gap-16 h-[80vh]">
      <img
        src={heroImg}
        className="hero-img h-[80vh] z-[0] object-cover object-left-top md:object-right w-full"
        alt="hero img"
      />
      {/* hero container */}
      <div className="hero-container bg-black/60 backdrop-blur-[1px] absolute top-0 text-center h-[80vh] px-6 sm:px-14 md:px-24 w-full mx-auto">
        <div className="max-w-4xl z-[99999999] mx-auto mt-20 lg:mt-32 tracking-wide flex flex-col items-center gap-4 ">
          <h1 id="heading" className="text text-5xl xl:text-[110.667px] leading-[1.2] md:text-5xl xl:text-6xl xl:leading-snug text-white">
            Be More!{" "}
          </h1>
          <p className="hero_subtext text text-lg md:text-2xl leading-normal text-white/90">
            Fanstribe delivers premium sports content and brings together sports
            enthusiasts around the world. Express your passion, explore,
            connect, stay updated and interact with others fans who share the
            same interests as you.{" "}
          </p>
          {/* <p
            className="text text-[17px] md:text-[32px] leading-normal text-white/80"
          >
            Our passion is our driving force and Fanstribe is home to fans of everything sports including football, basketball, baseball, cricket, American football, racing, rugby, tennis, hockey, golf, boxing, etc.
          </p> */}
          {/* <Link
            to="/join"
            className="text font-bold text-white px-8 bg-[#6de755d0] py-2 text-lg rounded-[50px] md:text-2xl mt-4 hover:bg-[#6EE755]/75"
          >
            GET STARTED
          </Link> */}
        </div>
      </div>
    </section>
  );
}

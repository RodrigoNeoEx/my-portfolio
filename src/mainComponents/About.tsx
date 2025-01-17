import { Suspense } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { useScreen } from "../context/ScreenContext";


import animationData from "../../dist/assets/Animation.json";

const About = () => {
  const { isMobile, horizontalMob } = useScreen();

  return (
    <section 
        id="about" 
        className={
            `${isMobile ? "flex-col" : "flex-row" } 
            bg-black py-20 px-6 flex justify-center items-center min-w-[100vw]`
        }
    >

      <div className="">
        <Suspense fallback={<div className="text-white">Loading animation...</div>}>
          <Player
            autoplay
            loop
            src={animationData}
            style={{ height: "auto", width: `${isMobile || horizontalMob ? "20rem" : "40vw" }` }}
          />
        </Suspense>
      </div>

      <div>
        <motion.h1
          className={`font-helv text-white mb-6 ${
            isMobile || horizontalMob
              ? "text-2xl leading-none"
              : "text-4xl leading-tight max-w-[50vw]"
          }`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          As a professional, I am{" "}
          <span className="text-lime-400 font-helv">dynamic</span>, with
          experience in IT project management and{" "}
          <span className="text-lime-400 font-helv">
            strong communication skills and teamwork abilities
          </span>
          . With an integrated vision of business, acquired through experiences
          in different areas, I am able to{" "}
          <span className="text-lime-400 font-helv">
            align IT needs with the strategic objectives of the company
          </span>
          . I am adaptable and{" "}
          <span className="text-lime-400 font-helv">solution-oriented</span>,
          always ready to face new challenges with a practical and collaborative
          approach, driving{" "}
          <span className="text-lime-400 font-helv">
            results that add value
          </span>{" "}
          and growth.
        </motion.h1>
      </div>
    </section>
  );
};

export default About;

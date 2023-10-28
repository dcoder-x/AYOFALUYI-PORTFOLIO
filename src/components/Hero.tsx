import Lottie, { LottieRef, LottieRefCurrentProps } from "lottie-react";
import React, { useContext, useEffect, useRef } from "react";
import mouse from "../assets/lotties/mouse.json";
import paperPlane from "../assets/lotties/paperPlane.json";
import bulb from "../assets/lotties/bulb.json";
import wave from "../assets/lotties/wave.json";
import portrait from "../assets/images/front.jpg";
import { AppContext } from "../App"
import '../styles/general.scss'

const Hero = (): JSX.Element => {
  const { sound } = useContext(AppContext);

  useEffect((): void => {
    sound ? waveRef.current?.play() : waveRef.current?.pause();
  }, [sound]);

  const waveRef = React.useRef<LottieRefCurrentProps>(null);
  return (
    <section
      className="hero w-full min-h-screen flex flex-col item-center justify-center "
      id="about"
    >
      <p className="name text-sm font-normal mb-4">AYOMIKUN FALUYI</p>
      <div className="hero-text text-[100px] font-bold">
        <p className="creame text-[#B7AB98] mix-blend-difference m-1 ">
          BY GOD'S{" "}
        </p>
        <p className="orange bg-gradient-to-l from-[#39eb8a] to-[#e47f2c] cursor-pointer hover:from-[#e47f2c] hover:to-[#39eb8a] bg-clip-text text-transparent mix-blend-exclusion m-1">
          GRACE
        </p>
        <p className="creame text-[#B7AB98] mix-blend-difference m-1">
          ALONE !!
        </p>
      </div>
      <div className="flex item-center bottom-0 relative  justify-center w-full">
        <Lottie
          animationData={mouse}
          loop
          className="text-center opacity-80 w-[40px]  my-4"
        />
      </div>
      <p className="text-xs text-white">scroll down</p>
      <div className="lottie top-40 left-40 z-[9] lg:flex hidden items-center  opacity-10 justify-center absolute bg-transparent">
        <Lottie className="w-[200px]" animationData={bulb} />
      </div>
      <div className="lottie top-0 z-[9] flex items-center opacity-40 justify-center absolute bg-transparent  h-screen">
        <Lottie animationData={paperPlane} loop={0} />
      </div>

      <div className="lottie top-0 z-[9] flex items-center opacity-[0.25] justify-center fixed bg-transparent right-0 h-screen">
        <Lottie
          lottieRef={waveRef}
          className="min-w-[500px]"
          animationData={wave}
          loop
        />
      </div>
    </section>
  );
};

export default Hero;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Cards from "../../components/Cards";
import Loader from "../../components/Loader";
import ParticleBackground from "../Particles/ParticleBackground";

import "./style.scss";

const Home = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 6000);
  }, []);

  return loader ? (
    <>
      <Loader />
    </>
  ) : (
    <>
      <motion.span
        initial="initial"
        animate="in"
        variants={variants}
        transition={pageTransition}
      >
        <ParticleBackground />
      </motion.span>

      <section className="homepage">
        <Cards />
      </section>
    </>
  );
};

export default Home;

// Motion
const variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 2,
};

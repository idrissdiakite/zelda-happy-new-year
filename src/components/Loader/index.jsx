import React from "react";
import Lottie from "react-lottie";
import animationLoader from "../Lottie/loader.json";
import { motion } from "framer-motion";

import "./style.scss";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLoader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <motion.div
      className="loader"
      initial="initial"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
      exit={{ opacity: 0, duration: 2 }}
    >
      <div className="loader-container">
        <Lottie
          options={defaultOptions}
          isClickToPauseDisabled={true}
        />
      </div>
    </motion.div>
  );
};

// Motion
const pageVariants = {
  initial: {
    opacity: 0,
    scale: 1,
  },
  in: {
    opacity: 1,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1.8,
};

export default Loader;

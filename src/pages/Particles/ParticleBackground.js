import React from "react";
import Particles from "react-tsparticles";
import ParticlesConfig from "./particle-config";

const ParticleBackground = () => {
  return (
    // "ParticlesConfig (le code du canva souhaité) est passé en paramètre au composant afin de pouvoir être réutilisé sur la Homepage"
    <Particles params={ParticlesConfig}></Particles>
  );
};

export default ParticleBackground;

import React from "react";
// import ParticlesBg from "particles-bg";
// import MouseParticles from 'react-mouse-particles'
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <main>
      {/* <ParticlesBg type="lines" num={150} bg={true} />
      <MouseParticles g={1} num={6} color="random" cull="container" level={6} /> */}
      <section className="relative flex justify-center p-24 lg:pt-64 px-8">
        <motion.h1
          // animate={{ x: 100, y: 100 }}
          // transition={{
          //   delay: 1,
          //   x: { type: "spring" },
          //   default: { duration: 2 }
          //  }}
          whileHover={{ scale: 1.1 }}
          className="text-6xl font-bold cursive leading-none lg:leading-snug home-name"
        >
          Hello, I'm PJ
        </motion.h1>
      </section>
    </main>
  );
};

export default Home;

import React from "react";
// import ParticlesBg from "particles-bg";
// import MouseParticles from 'react-mouse-particles'
import "./Home.css";
import { motion } from "framer-motion";
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
  width: 200px;
  margin: auto;
  margin-top: 100px;
  background: papayawhip;
`;
 

const containerVariant = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: "40vh",
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
      delayChildren: 0.5,
    },
  },
};

const titleVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  hover: {
    scale: 1.1,
  },
};

const letterHolder = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: {  },
  visible: {
    
    x: 200,
    y: [0, -20, 0],
     
    transition: {
      yoyo: Infinity,
      duration: .5,
    },
  },
};

const Home = () => {
  return (
    <main>
      <Wrapper variants={letterHolder} initial="hidden" animate="visible">
        <motion.p variants={letter}>H</motion.p>
        <motion.p variants={letter}>E</motion.p>
        <motion.p variants={letter}>L</motion.p>
        <motion.p variants={letter}>L</motion.p>
        <motion.p variants={letter}>O</motion.p>
      </Wrapper>
      <motion.div
        className="border-solid border-2 border-gray-500 mt-24 mx-24"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {/* <ParticlesBg type="lines" num={150} bg={true} />
      <MouseParticles g={1} num={6} color="random" cull="container" level={6} /> */}
        <motion.section
          className="relative flex justify-center p-24 px-8"
          variants={titleVariant}
        >
          <motion.h1
            className="text-6xl font-bold cursive leading-none lg:leading-snug home-name"
            whileHover={{ scale: 1.05 }}
          >
            Hello, I'm PJ
          </motion.h1>
        </motion.section>
      </motion.div>
    </main>
  );
};

export default Home;

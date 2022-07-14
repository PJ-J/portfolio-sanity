import React from "react";
// import ParticlesBg from "particles-bg";
// import MouseParticles from 'react-mouse-particles'
import "./Home.css";
import tomato from "../assets/images/tomato.png";
import tiles from "../assets/images/oriental-tiles.png";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
  width: 200px;
  margin: auto;
  margin-top: 100px;
  background: papayawhip;
`;
const Word = styled(motion.h1)`
  color: #9B8E77;
  z-index: 1;
`;

const TallBox = styled(motion.div)`
  height: 500vh;
  background-image: url(${tiles});
  border: 10px solid black;
  margin: 100px;
  border-radius: 10px;
`;
 

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    
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
    
    x: [0,200,0],
    y: [0, -20, 0],
     
    transition: {
      repeat: Infinity,
      duration: 1,
    },
  },
};

const tomatoImg = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    x: 250,
    y: 900
   },
}

const Home = () => {
  const {scrollY, scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollY, [0,1000], [0,20]);
  const opacity = useTransform(scrollY, [1200,1205], [1,0]);
  const background = useTransform(scrollY, [1000,1100], ["rgb(255,255,255)","rgb(244,67,54)"]);
  return (
    <motion.main style={{backgroundColor: background}}>
      <Wrapper variants={letterHolder} initial="hidden" animate="visible">
        <motion.p variants={letter}>H</motion.p>
        <motion.p variants={letter}>E</motion.p>
        <motion.p variants={letter}>L</motion.p>
        <motion.p variants={letter}>L</motion.p>
        <motion.p variants={letter}>O</motion.p>
      </Wrapper>
      <motion.img 
        style={{scale, opacity}}
        className="h-24" 
        variants={tomatoImg} 
        initial="hidden"
        animate="visible"
        src={tomato} 
        alt="tomato" />
      <TallBox
        className=""
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
          <Word
            className="text-6xl cursive home-name leading-none lg:leading-snug"
            whileHover={{ scale: 1.05 }}
          >
            Hello, I'm PJ
          </Word>
        </motion.section>
      </TallBox>
      
    </motion.main>
  );
};

export default Home;




import React from "react";
import ParticlesBg from "particles-bg";
import MouseParticles from 'react-mouse-particles'
import './Home.css'

const Home = () => {
  return (
    <main>
      <ParticlesBg type="lines" num={150} bg={true} />
      <MouseParticles g={1} num={6} color="random" cull="container" level={6} />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl fadeIn font-bold text-white cursive leading-none lg:leading-snug home-name">Hello, I'm PJ</h1>
      </section>
    </main>
  );
};

export default Home;

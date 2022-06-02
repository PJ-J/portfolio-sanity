import React from "react";
import ParticlesBg from "particles-bg";
import MouseParticles from 'react-mouse-particles'

const Home = () => {
  return (
    <main>
      <ParticlesBg type="lines" num={150} bg={true} />
      <MouseParticles g={1} num={6} color="random" cull="container" level={6} />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-white font-bold cursive leading-none lg:leading-snug home-name">Hey I'm PJ</h1>
      </section>
    </main>
  );
};

export default Home;

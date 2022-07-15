import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import ParticlesBg from "particles-bg";
import "./Project.css";
import serenityPic from "../assets/images/serenity_screen.png";
import portfolioPic from "../assets/images/portfolio.jpg";
import justMyTypePic from "../assets/images/justmytype.jpg";
import chirprPic from "../assets/images/chirpr.jpg";
import { motion } from "framer-motion";

const listItemContainerVariant = {
  hidden: {},
  show: {},
};
const listItemVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delay: 0.5 } },
};

const Project = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags      
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  const picArray = [portfolioPic, serenityPic, justMyTypePic, chirprPic];

  return (
    <main className="min-h-screen p-12">
      <ParticlesBg type="cobweb" bg={true} />
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Resume projects with links to Github
        </h2>

        {projectData && (
          <motion.section
            className="grid grid-cols-2 gap-8"
            variants={listItemContainerVariant}
            // initial="hidden"
            // animate="show"
          >
            {projectData.map((project, index) => (
              <motion.article
                variants={listItemVariant}
                className="relative rounded-lg shadow-xl bg-gray-300 p-5"
                key={index}
                initial="hidden"
                whileHover={{
                  scale: 1.05,
                }}
                whileInView="show"
                viewport={{
                  once: false,
                  amount: "some",
                }}
              >
                <div className="pic relative flex justify-center">
                  <img src={picArray[index]} alt="app" />
                </div>
                <h3 className="text-gray-800 text-center cursive text-3xl font-bold m-2 hover:text-gray-400">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Location</strong>:{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-gray-900 font-bold hover:underline hover:text-gray-400 text-xl"
                  >
                    Go to Github Repo{" "}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.section>
        )}
      </section>
    </main>
  );
};

export default Project;

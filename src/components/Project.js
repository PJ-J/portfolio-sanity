import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import ParticlesBg from "particles-bg";
import "./Project.css";
import serenityPic from "../assets/images/serenity_screen.png";
import portfolioPic from "../assets/images/portfolio.jpg";
import justMyTypePic from "../assets/images/justmytype.jpg";
import chirprPic from "../assets/images/chirpr.jpg";
// import imageUrlBuilder from '@sanity/image-url'

// const builder = imageUrlBuilder(sanityClient)

// function urlFor(source) {
//   return builder.image(source)
// }

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
        <section className="grid grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article
                className={`relative animate glow delay-${index} rounded-lg shadow-xl bg-gray-300 p-5`}
                key={index}
              >
                <div className="pic relative flex justify-center">
                  <img src={picArray[index]} alt="app" />
                </div>
                <h3 className="text-gray-800 text-center cursive text-3xl font-bold m-2 hover:text-red-700">
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
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                  >
                    Go to Github Repo{" "}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
};

export default Project;

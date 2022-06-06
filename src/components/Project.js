import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import ParticlesBg from "particles-bg";
import './Project.css'
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
      tags,
      "projectImage": image.asset->url
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="min-h-screen p-12">
    <ParticlesBg type="cobweb" bg={true} />
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Resume projects with links to Github
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {projectData && projectData.map((project, index) => (
          <article className={`relative animate glow delay-${index} rounded-lg shadow-xl bg-gray-300 p-16`} key={index}>
            <h3 className="text-gray-800 cursive text-3xl font-bold mb-2 hover:text-red-700">
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
                <strong className="font-bold">Location</strong>: {project.place}
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
            {/* <img src={urlFor(project.projectImage).url()} alt="app" /> */}
          </article>
          ))}
        </section>
      </section>
    </main>
  );
};

export default Project;
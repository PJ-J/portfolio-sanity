import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import { Link } from "react-router-dom";
import './Person.css'
import BlockContent from "@sanity/block-content-to-react";

const Person = () => {
  const [personData, setPerson] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "person"]{
        name,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        },body,
        quote
      }`
      )
      .then((data) => setPerson(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen p-12">
      <section className="container mx-auto">
      
        <h1 className="text-5xl flex justify-center cursive">Future Co-workers Page</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">Just kidding I'm not crazy, just thought it would be a good way to learn Sanity.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {personData && personData.map((person, index) => (
          <article>
          <Link to={"/person/" + person.slug.current} key={person.slug.current}>
            <span className="content h-80 block rounded shadow" key={index}>
              <img
                src={person.mainImage.asset.url}
                alt={person.mainImage.alt}
                className="content-image h-full rounded-r object-cover absolute"  
               />
               <div className="content-overlay"></div>
              {/* <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                <h3 className=" text-lg font-blog px-3 py-4 bg-gray-700 text-white bg-opacity-75 rounded">{person.name}</h3>
              </span> */}
              <div className="content-details fadeIn-bottom">
        <h3 className="content-title">{person.name}</h3>
        <p className="content-text"><BlockContent
            blocks={person.body}
            projectId="j8bh8ea4"
            dataset="production"
          /></p>
        <p className="content-text"><BlockContent
            blocks={person.quote}
            projectId="j8bh8ea4"
            dataset="production"
          /></p>
        
      </div>
            </span>
            </Link>
          </article>
          ))}
        </div>
      </section>
    </main>  
  )
};

export default Person;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const SinglePerson = () => {
  const [singlePerson, setSinglePerson] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
      name,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      "name": name,
      "authorImage": author->image,
      quote
    }`
      )
      .then((data) => setSinglePerson(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePerson) return <div>Loading...</div>;

  return (
    <main className="bg-gray-200 min-h-screen p-20">
      <article className="container shadow-lg mx-auto bg-gray-300 rounded-lg">
      <a href="/person">
        <button className="p-3 bg-gray-400 w-full rounded-t-lg">Back to people</button>
      </a>
        <header className="flex items-center justify-center">
          <div className="relative flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h1 className="cursive text-3xl lg:text-6xl mb-4">
                {singlePerson.name}
              </h1>
              <h3>
                <BlockContent
                  blocks={singlePerson.body}
                  projectId="j8bh8ea4"
                  dataset="production"
                />
              </h3>
              <div className="flex justify-center text-gray-800">
                {/* <img
                  src={urlFor(singlePerson.authorImage).url()}
                  alt={singlePerson.name}
                  className="w-10 h-10 rounded-full"
                /> */}

                {/* <p className="cursive flex items-center pl-2 text-2xl">
                  {singlePerson.body}
                </p> */}
              </div>
            </div>
          </div>
          <img
            src={singlePerson.mainImage.asset.url}
            alt={singlePerson.name}
            className="rounded-lg m-10"
            // style={{ height: "400px" }}
          />
        </header>
        <div className="rounded-b-lg flex justify-center items-center px-16 lg:px-48 py-5 lg:py-10 prose lg:prose-xl max-w-full bg-gray-100">
          <BlockContent
            blocks={singlePerson.quote}
            projectId="j8bh8ea4"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
};

export default SinglePerson;

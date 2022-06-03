import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import Picture from "../assets/images/adam-kool-ndN00KmbJ1c-unsplash.jpg";
import AlloyModel from "../assets/images/alloy_model.png";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative">
      <img src={Picture} alt="nature" className="absolute w-full" />
      <div className="p-10 lg:pt-20 container mx-auto relative">
        <section className="bg-gray-700 rounded-lg shadow-2xl lg:flex px-20 py-10">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded mt-9 w-32 h-32 lg:w-96 lg:h-96 mr-8 border-double border-2 border-gray-500"
            alt={author.name}
          />
          <div className="text-lg">
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectId="j8bh8ea4"
                dataset="production"
              />
              <img
                src={AlloyModel}
                alt="alloy 3d logo"
                className="w-64 rounded shadow-xl"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;

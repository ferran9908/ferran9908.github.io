import { useEffect, useState } from "react";
import sanityClient from "../client";

import imageUrlBuilder from "@sanity/image-url";

import aboutCover from "../about-cover.jpg";
import SanityBlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
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
      .catch((e) => console.error(e));
  }, []);

  if (!author) return <div>Loading ...</div>;
  return (
    <main className="relative">
      <img
        src={aboutCover}
        alt="Laptop with code editor open"
        className="absolute w-full"
      />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-red-800 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-64 lg:w-64 lg-h-64 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="my-style text-6xl text-red-300 mb-4">
              {" "}
              Hey there! I'm <span className="text-red-100">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <SanityBlockContent
                blocks={author.bio}
                projectId="azmhdul6"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

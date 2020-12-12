import { useEffect, useState } from "react";

import sanityClient from "../client";

export default function Project() {
  const [projectData, setProject] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'project'] {
      title,
      date,
      description,
      link,
      tags
    }`
      )
      .then((data) => setProject(data))
      .catch((e) => console.error(e));
  }, []);
  return (
    <main className="bg-gray-200 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center my-style mb-4">
          My Projects
        </h1>
        <section className="grid grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-800">
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
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                  >
                    View The Project{" "}
                    <span role="img" aria-label="right-pointer">
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
}

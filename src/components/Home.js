import image from "../cover.jpg";
export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Macbook"
        className="absolute object-cover h-full w-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64">
        <h1 className="text-6xl text-white font-bold my-style leading-none lg:leading-snug home-name">
          Hey, I'm Ferran
          <br />
          I'm a fullstack developer
        </h1>
      </section>
    </main>
  );
}

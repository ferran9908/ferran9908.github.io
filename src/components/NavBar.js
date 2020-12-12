import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-red-700">
      <div className="container flex justify-between mx-auto">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center px-3 py-6 mr-4 text-4xl font-bold tracking-widest text-red-100 hover:text-blue-400 my-style"
          >
            Ferran
          </NavLink>
          <NavLink
            to="/posts"
            className="inline-flex items-center px-3 py-3 my-6 text-red-200 rounded hover:text-blue-400"
            activeClassName="text-red-100 bg-red-800"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/projects"
            className="inline-flex items-center px-3 py-3 my-6 text-red-200 rounded hover:text-blue-400"
            activeClassName="text-red-100 bg-red-800"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center px-3 py-3 my-6 text-red-200 rounded hover:text-blue-400"
            activeClassName="text-red-100 bg-red-800"
          >
            About me!
          </NavLink>
        </nav>
        <div className="inline-flex px-3 py-3 my-6">
          <SocialIcon
            url="https://twitter.com/SulaimanFerran"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCa2QGBugLZ_FDzZ5sPh90mQ?view_as=subscriber"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/ferran-sulaiman/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}

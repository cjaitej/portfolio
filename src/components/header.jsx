import { HashLink as Link } from "react-router-hash-link";
import "../App.css";

export default function Navigator() {
  return (
    <nav className="tittle flex justify-between px-9 py-5 items-center">
      <Link to={"/"} className="text-white text-4xl font-medium">
        Portfolio
      </Link>
      <ul className="flex gap-9 text-lg text-white text-normal nav-header bg-transparent">
        <li>
          <Link to="https://cjaitej.github.io/blog/" target="_blank">
            Blogs
          </Link>
        </li>

        <li>
          <Link to="#about" smooth>
            About
          </Link>
        </li>

        <li>
          <Link to="#skill" smooth>
            Skills
          </Link>
        </li>

        <li>
          <Link to="#project" smooth>
            Projects
          </Link>
        </li>

        <li>
          <Link to="#certificate" smooth>
            Certificates
          </Link>
        </li>
        <li>
          <Link to="#contact" smooth>
            Contact me
          </Link>
        </li>
      </ul>
    </nav>
  );
}

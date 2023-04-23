import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <header className="navbar">
      <img src="/greenfootLogo.jpg" alt="logo" height="100px" width="100px" />
        <article>
          <h1>
            <Link to="/">
              <span>Welcome to Green Runners!</span>
            </Link>
          </h1>
        
        </article>

        <nav>
          <ul>
            <li>
              <Link to="/scores">See who is winning!</Link>
            </li>
            <li>
              <Link to="/scores/new">I want my green score!</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

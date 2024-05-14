import { Link } from "react-router-dom";
import "./index.scss";
function Header() {
  
  return (
    <header className="header">
      <div className="header_logo">
        <img src="https://pngimg.com/d/netflix_PNG22.png" width={100} alt="" />
      </div>
      <nav className="header_nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Movies</Link>
          </li>
          <li>
            <Link to="/movie-management">Movie Management</Link>
          </li>
          <li>
            <i className="fa fa-search" aria-hidden="true"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

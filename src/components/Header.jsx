// Bringing in the required import from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const currentPage = useLocation().pathname;
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <>
    <h1>Hello to my Portofolio v2 using REACT</h1>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portafolio"
          className={currentPage === '/portafolio' ? 'nav-link active' : 'nav-link'}
        >
          Portafolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/resume"
          className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
    </ul>
    </>
  );
}

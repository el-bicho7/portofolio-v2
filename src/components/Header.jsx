// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Header() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <>
    <h1>Hello to my Portofolio v2 using REACT</h1>
    <Navbar
      links={[
        <Link key={2} className="nav-link text-light" to="/">
          About Me
        </Link>,
        <Link key={3} className="nav-link text-light" to="/portafolio">
          Portafolio
        </Link>,
        <Link key={4} className="nav-link text-light" to="/contact">
          Contact
        </Link>,
        <Link key={5} className="nav-link text-light" to="/resume">
          Resume
      </Link>,
      ]}
    />
    </>
  );
}

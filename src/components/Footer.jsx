// Bringing in the required import from 'react-router-dom'
import gitHubMark from '../utils/github-mark.png';
import twitterMark from '../utils/x-black.png';
import linkedInMark from '../utils/LI-In-Bug.png';

export default function Footer() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <>
    <ul class="social-icons">
      <li>
        <a href="https://github.com/el-bicho7" target="_blank" alt="GitHub">
            <img src={gitHubMark}></img>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/cristian-eduardo-loera-portillo-1a7b9310a/" target="_blank" alt="LinkedIn">
        <img src={linkedInMark}></img>
        </a>
      </li>
      <li>
        <a href="https://x.com/cristian_loe" target="_blank" alt="Twitter">
            
            <img src={twitterMark}></img>
        </a>
      </li>
    </ul>
    </>
  );
}
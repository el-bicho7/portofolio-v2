// Bringing in the required import from 'react-router-dom'
import gitHubMark from '../utils/images/github-mark.png';
import twitterMark from '../utils/images/x-black.png';
import linkedInMark from '../utils/images/LI-In-Bug.png';

const styles = {
  width: 100,
  height: 100,
  margin: 10
}

export default function Footer() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <>
    <div class="text-center">
      <ul class="social-icons list-inline">
        <li class="list-inline-item">
          <a 
          href="https://github.com/el-bicho7" 
          target="_blank" 
          alt="GitHub">
            <img class="img-fluid img-thumbnail" style={styles} src={gitHubMark}></img>
          </a>
        </li>
        <li class="list-inline-item">
          <a 
          href="https://www.linkedin.com/in/cristian-eduardo-loera-portillo-1a7b9310a/" 
          target="_blank" 
          alt="LinkedIn">
            <img class="img-fluid img-thumbnail" style={styles} src={linkedInMark}></img>
          </a>
        </li>
        <li class="list-inline-item">
          <a 
          href="https://x.com/cristian_loe" 
          target="_blank" 
          alt="Twitter">
            <img class="img-fluid img-thumbnail" style={styles} src={twitterMark}></img>
          </a>
        </li>
      </ul>
    </div>
    </>
  );
}
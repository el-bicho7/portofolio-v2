import resume from '../utils/cv.pdf'



// This is a static page mocking an "Resume Page" section for the user to download our Resume
export default function ResumePage() {
  return (
    <div className="container pt-4">
      <a href={resume} download>
        Downloadable Resume
      </a>
    </div>
  );
}

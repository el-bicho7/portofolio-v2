import resume from "../utils/documents/CV Cristian Loera - English.pdf";

// This is a static page mocking an "Resume Page" section for the user to download our Resume
export default function ResumePage() {
  return (
    <>
      <div className="text-center">
        <div className="container pt-4">
          <p>You can dowload the resume in the following link:</p>
          <a className="text-center" href={resume} download>
            Downloadable Resume
          </a>
        </div>
        <div className="container pt-4">
          <h4>Abilities</h4>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">HTML</li>
            <li class="list-group-item">CSS</li>
            <li class="list-group-item">Javascript</li>
            <li class="list-group-item">Bootstrap</li>
            <li class="list-group-item">Render</li>
            <li class="list-group-item">REACT</li>
            <li class="list-group-item">Render</li>
            <li class="list-group-item">SQL</li>
            <li class="list-group-item">NoSQL</li>
          </ul>
        </div>
      </div>
    </>
  );
}

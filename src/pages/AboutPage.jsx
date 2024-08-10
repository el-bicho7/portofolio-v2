import profile from "../utils/images/profile.jpg";

// This is a static page mocking an "About Us" section for our fake user data
export default function AboutPage() {
  return (
    <div className="container pt-4">
      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <img src={profile}></img>
                <p className="lead mb-0">Welcome.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>Bio</h3>
                <p className="lead mb-0">
                  Hello my name is Cristian Loera. I live in Ciudad Juarez,
                  Chihuahua, Mexico. I'm a graduate from UDLAP. <br></br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <figure className="text-center">
          <blockquote class="blockquote">
            <p>
              "A dream- It's something you do for yourself, not for others."
            </p>
          </blockquote>
          <figcaption class="blockquote-footer">
            Griffith <cite title="Source Title">(Berserk)</cite>
          </figcaption>
        </figure>
      </section>
    </div>
  );
}

import "../styles/PortafolioPage.css";

// This is a static page mocking an "Portafolio" section for our 6 portafolios
export default function PortafolioPage() {
  return (
    <>
      <div class="container text-center">
        <h4>Sites</h4>
        <div class="row g-2">
          <div class="col-6">
            <div class="p-3">
              <a
                class="portafolio tech-btn"
                href="https://the-tech-blog-i15l.onrender.com/"
              ></a>
              <p>Tech Blog</p>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3">
              <a
                class="portafolio note-taker-btn"
                href="https://note-taker-sy1f.onrender.com/"
              ></a>
              <p>Note Taker</p>
            </div>
          </div>
        </div>
        <h4>Repositories</h4>
        <div class="row g-2">
          <div class="col-6">
            <div class="p-3">
              <a
                class="portafolio backend-btn"
                href="https://github.com/el-bicho7/back-end"
              ></a>
              <p>Back End</p>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3">
              <a
                class="portafolio employee-btn"
                href="https://github.com/el-bicho7/Employee_tracker"
              ></a>
              <p>Employee Tracker</p>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3">
              <a
                class="portafolio weather-btn"
                href="https://github.com/el-bicho7/weatherForecast"
              ></a>
              <p>Weather Forecast</p>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3">
              <a
                class="portafolio logo-btn"
                href="https://github.com/el-bicho7/logo-maker"
              ></a>
              <p>Logo Maker</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

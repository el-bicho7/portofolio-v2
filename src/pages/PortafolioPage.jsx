import "../styles/PortafolioPage.css";

// This is a static page mocking an "Portafolio" section for our 6 portafolios
export default function PortafolioPage() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-center">
            <ul>
              <li>
                <a
                  class="portafolio tech-btn"
                  href="https://github.com/el-bicho7/the-tech-blog"
                ></a>
                <p>Tech Blog</p>
              </li>
              <li>
                <a
                  class="portafolio tech-btn"
                  href="https://github.com/el-bicho7/back-end"
                ></a>
                <p>Back End</p>
              </li>
              <li>
                <a
                  class="portafolio employee-btn"
                  href="https://github.com/el-bicho7/Employee_tracker"
                ></a>
                <p>Employee Tracker</p>
              </li>
            </ul>
          </div>
          <div class="col-md-6 text-center">
            <ul>
              <li>
                <a
                  class="portafolio render-btn"
                  href="https://github.com/el-bicho7/mini_render_project"
                ></a>
                <p>Render</p>
              </li>
              <li>
                <a
                  class="portafolio logo-btn"
                  href="https://github.com/el-bicho7/logo-maker"
                ></a>
                <p>Logo Maker</p>
              </li>
              <li>
                <a
                  class="portafolio weather-btn"
                  href="https://github.com/el-bicho7/weatherForecast"
                ></a>
                <p>Weather Forecast</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

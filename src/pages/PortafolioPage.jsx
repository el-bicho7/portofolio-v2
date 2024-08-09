import '../styles/PortafolioPage.css'

// This is a static page mocking an "Portafolio" section for our 6 portafolios
export default function PortafolioPage() {
  return (
    <>
      <div class="container">
        <div class="row"> 
          <div class="col-md-6 text-center">
            <ul>
              <li>
                <a href="https://github.com/el-bicho7/the-tech-blog" >
                  <button class="tech-btn"></button>
                  <p>Tech Blog</p>
                </a>
              </li>
              <li>
                <a href="https://github.com/el-bicho7/back-end" >
                  <button class="backend-btn"></button>
                  <p>Back End</p>
                </a>
              </li>
              <li>
                <a href="https://github.com/el-bicho7/Employee_tracker" >
                  <button class="employee-btn"></button>
                  <p>Employee Tracker</p>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-6 text-center">
            <ul>
              <li>
                <a href="https://github.com/el-bicho7/mini_render_project" >
                  <button class="render-btn"></button>
                  <p>Render</p>
                </a>
              </li>
              <li>
                <a href="https://github.com/el-bicho7/logo-maker" >
                <button class="logo-btn"></button>
                <p>Logo Maker</p>
                </a>
              </li>
              <li>
                <a href="https://github.com/el-bicho7/weatherForecast" >
                <button class="weather-btn"></button>
                <p>Weather Forecast</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
    </div>
    </>
  );
}

import Foto from '../img/calpro1.jpg';
import Foto2 from '../img/med.jpg';

import '../styles/components/projectcontainer.sass';

function ProjectsContainer() {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <div className="project">
        <p>CalPro</p>
        <p>UbMed</p>
      </div>

      <div className="img">
        <img src={Foto} id="foto" alt="" />
        <img src={Foto2} id="foto" alt="" />
      </div>
      <a href="https://github.com/viniciusbq" className="btn">
        Ver Projetos
      </a>
    </section>
  );
}

export default ProjectsContainer;

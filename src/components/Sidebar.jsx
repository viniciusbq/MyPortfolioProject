import Avatar from '../img/eu.jpeg';
import Pdf from '../img/Vinicius Borba Queiroz.pdf';

import '../styles/components/sidebar.sass';

import InformationContainer from './InformationContainer';
import SocialNetwork from './SocialNetwork';

export const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Vinicius Borba" />
      <p className="title">Desenvolvedor</p>
      <SocialNetwork />
      <InformationContainer />
      <a href={Pdf} className="btn">
        Download Curriculo
      </a>
    </aside>
  );
};

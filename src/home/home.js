import {
  ImageBackgroung,
  ImageDivLogo,
  ImageDivWitcher,
  SparksBackDiv,
  SparksFrontDiv,
} from './styles/images-styles';
import './style.css';
import MainContent from './mainContent';
import { ContainerWitcher } from './styles/containers-styles';

const Home = () => {
  
  return (
    <ImageBackgroung>
      <ContainerWitcher>
        <SparksBackDiv />
        <ImageDivWitcher />
        <SparksFrontDiv />
        <ImageDivLogo />
      </ContainerWitcher>
      <MainContent />
    </ImageBackgroung>
  );
};

export default Home;

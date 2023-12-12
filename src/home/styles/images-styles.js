import { styled } from '@mui/material/styles';
import witcher from '../../img/witcher.png';
import sparksBack from '../../img/sparks_back.png';
import sparksFront from '../../img/sparks_front.png';
import background from '../../img/bg.png';
import logo from '../../img/logo.png';
import { MainContainer } from './containers-styles';

export const ImageDivWitcher = styled('div')(({ theme }) => ({
  backgroundImage: `url(${witcher})`,
  backgroundSize: 'contain',
  backgroundPosition: 'left bottom',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  zIndex: 1,
  [theme.breakpoints.down('lg')]: {
    backgroundPosition: 'center bottom',
  },
}));

export const SparksBackDiv = styled('div')(({ theme }) => ({
  backgroundImage: `url(${sparksBack})`,
  backgroundPosition: 'left bottom',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    backgroundPosition: 'left bottom',
  },
}));

export const SparksFrontDiv = styled('div')(({ theme }) => ({
  backgroundImage: `url(${sparksFront})`,
  backgroundPosition: 'left bottom',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%',
  display: 'flex',
  position: 'absolute',
  zIndex: 2,
  [theme.breakpoints.down('lg')]: {
    backgroundPosition: 'center bottom',
  },
}));

export const ImageBackgroung = styled(MainContainer)(({ theme }) => ({
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  boxSizing: 'border-box',
  position: 'relative',
}));

export const ImageDivLogo = styled('div')(({ theme }) => ({
  backgroundImage: `url(${logo})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  boxSizing: 'border-box',
  position: 'absolute',
  width: '214px',
  height: '3em',
  bottom: '5%',
  display: 'flex',
  zIndex: 2,
}));

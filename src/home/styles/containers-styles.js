import { styled } from '@mui/material/styles';

export const MainContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  position: 'relative',
  boxSizing: 'border-box',
  justifyContent: 'space-around',
  padding: '0 30px',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column-reverse',
  },
}));

export const ContainerContent = styled('div')(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: '80vh',
  },
}));

export const ContainerWitcher = styled('div')(({ theme }) => ({
  width: '54%',
  height: '100vh',
  position: 'relative',
  display: 'flex',

  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: '91vh',
  },
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    // height: '91vh',
  },
}));

import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const StyledText = styled(Typography)(({ theme }) => ({
  padding: 0,
  margin: 0,
  color: 'white',
  fontSize: '67px',
  fontFamily: 'CambiraBold',
  textTransform: 'uppercase',
  [theme.breakpoints.down('md')]: {
    fontSize: '53px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '31px',
  },
}));

export const StyledTextBig = styled(StyledText)(({ theme }) => ({
  fontSize: '208px',
  lineHeight: 1,
  [theme.breakpoints.down('md')]: {
    fontSize: '160px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '100px',
  },
}));

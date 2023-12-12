import { styled } from '@mui/material/styles';
import { Button, OutlinedInput } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
  width: 350,
  height: '7.5%',
  borderRadius: 40,
  backgroundColor: '#f73427',
  borderColor: '#f73427',
  color: 'white',
  fontSize: 20,
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#f73427',
    border: '1px solid rgba(247, 53, 39, 1)',
  },
  [theme.breakpoints.down('lg')]: {
    height: '14%',
  },
  [theme.breakpoints.down('md')]: {
    width: 368,
    height: '13%',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: 200,
    height: '11%',
  },
}));

export const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  width: 258,
  borderRadius: '40px 0 0 40px',
  border: '1px solid #464646 !important',
  fontSize: 40,
  height: 71,
  color: '#f73427 !important',
  padding: '10px 15px',
  margin: '35px 0 50px',
  [theme.breakpoints.down('lg')]: {
    margin: '15px 0 25px',
    height: 61,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 15,
    margin: '10px 0 20px',
    height: 51,
    width: 130,
  },
  [theme.breakpoints.between('sm, md')]: {
    fontSize: 18,
  },
}));

export const StyledButtonCopy = styled(Button)(({ theme }) => ({
  width: 156,
  height: 71,
  borderRadius: '0 40px 40px 0',
  border: '1px solid #464646 !important',
  fontSize: 18,
  color: 'white',
  padding: '0 20px',
  margin: '35px 0 50px',
  '&:hover': {
    backgroundColor: '#f73427',
    color: 'white',
  },
  [theme.breakpoints.down('lg')]: {
    margin: '15px 0 25px',
    height: 61,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 12,
    margin: '10px 0 20px',
    height: 51,
    width: 120,
  },
}));

export const FormControlStyle = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'center',
};

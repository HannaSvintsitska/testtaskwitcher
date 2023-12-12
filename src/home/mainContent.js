import { FormControl } from '@mui/material';
import {
  FormControlStyle,
  StyledButton,
  StyledButtonCopy,
  StyledOutlinedInput,
} from './styles/button-input-styles';
import { StyledText, StyledTextBig } from './styles/texts-styles';
import { ContainerContent } from './styles/containers-styles';
import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import './style.css';
import { PROMOCODE } from '../constants';

const MainContent = () => {
  const [didCopied, setDidCopied] = useState(false);

  return (
    <ContainerContent>
      <StyledTextBig>300%</StyledTextBig>
      <StyledText>welcome bonus</StyledText>
      <FormControl variant="outlined" sx={FormControlStyle}>
        <StyledOutlinedInput
          defaultValue="WITCHER"
          fullWidth
          id="outlined-adornment-password"
          type="text"
          readOnly
        />
        <StyledButtonCopy
          onClick={() => {
            navigator.clipboard.writeText(PROMOCODE);
            setDidCopied(true);
          }}
          edge="end"
          className="copyButton"
        >
          {!didCopied ? (
            'Copy code'
          ) : (
            <>
              <CheckIcon />
              Copied
            </>
          )}
        </StyledButtonCopy>
      </FormControl>
      <StyledButton variant="outlined" className="pulse">
        Play now
      </StyledButton>
    </ContainerContent>
  );
};

export default MainContent;

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import logo from 'assets/StreetSmart-logo-white.svg'
import icon from 'assets/About-icon.svg'
import { About } from 'components/About/About';

import { NavBarContainer, StyledButton, StyledImage } from './NavBar.Styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  color: 'var(--color-white)',
  bgcolor: 'var(--color-primary)',
  p: 4
};

export const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onRestartButton = () => {
    window.location.reload();
  }
  return (
    <NavBarContainer>
      <StyledButton type="button" onClick={onRestartButton}>
        <StyledImage className="logo" src={logo} width={132} alt="StreetSmart logotype" />
      </StyledButton>
      <StyledButton type="button" onClick={handleOpen}>
        <StyledImage className="icon" src={icon} width={25} alt="About icon" />
      </StyledButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <About />
        </Box>
      </Modal>
    </NavBarContainer>
  );
}
// import React from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { About } from 'components/About/About';

import { NavBarContainer, Title, AboutButton } from './NavBar.Styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  color: 'var(--color-white)',
  bgcolor: 'var(--color-primary)',
  // border: '2px solid #000',
  // boxShadow: 24,
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
      <Title type="button" onClick={onRestartButton}>StreetSmart</Title>
      <div>
        <AboutButton type="button" onClick={handleOpen}>About</AboutButton>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <About />
            {/*             <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
          </Box>
        </Modal>
      </div>
    </NavBarContainer>
  );
}
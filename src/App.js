import React from 'react';
import { Button, Typography, Stack, Box, AppBar, CssBaseline, Menu, MenuItem } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="static" sx={{bgcolor: 'primary.dark'}}>
          <div>
          <Typography color="secondary" variant="h3">EAZYNOTEZ</Typography>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            color="secondary"
            sx={{bgcolor: 'primary.light',
          margin: 1}}
            endIcon={<KeyboardArrowDown/>}
          >
            Dashboard
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            sx={{color: "primary"}}
          >
            <MenuItem bgcolor="primary.dark" onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem sx={{bgcolor: 'red'}} onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </AppBar>
      <Box backgroundColor="rgba(0, 0, 255, 0.3)" minHeight={500}>
        <Typography align="center" variant="h1" gutterBottom>Hello someone</Typography>
          <Stack md={{direction: 'column'}} direction="row" justifyContent="space-evenly">
            <Button size="large" color="secondary" variant="contained" sx={{fontSize: 22, border: 3, borderColor: 'secondary.main', width: 0.17, '&:hover': {bgcolor: 'primary.dark', color: 'secondary.light'}}}>BUY</Button>
            <Button size="large" color="secondary" variant="outlined" sx={{color: 'primary.dark', fontSize: 22, border: 3, width: 0.17, '&:hover': {color: 'secondary.main', border: 3}}}>SELL</Button>
          </Stack>
      </Box>
    </div>
  );
}

export default App;
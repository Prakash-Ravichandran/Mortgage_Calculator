import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h5">Mortgage Calculator</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

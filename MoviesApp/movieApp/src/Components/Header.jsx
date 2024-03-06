import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
  return (
    <div>
      <AppBar sx={{ backgroundColor: "black", position: "sticky" }}>
        <Container maxWidth="x1">
          <Toolbar>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              MOVIES
            </Typography>
            <Stack direction="row" spacing={4}>
              <Typography>Entertainment</Typography>
              <Typography>Thrill</Typography>
              <Typography>Horrors</Typography>
              <Typography>Magic</Typography>
              <Typography>Hollywood</Typography>
            </Stack>
            <Box sx={{ display: "flex", marginLeft: "400px" }}>
              <Button
                sx={{
                  border: "1px solid white",
                  color: "white",
                }}
              >
                Search here!
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/system";
import { Button } from "@mui/material";
import { useState } from "react";
import PlaylistForm from "../PLAYLIST_FORM";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

const Navbar = ({ getPlaylistById }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getPlaylistId = (playlistId) => {
    getPlaylistById(playlistId);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ py: 2, backgroundColor: "#79bbe0b5" }}>
        <Container maxWidth={"lg"}>
          <Toolbar>
            <Stack sx={{ flexGrow: 1 }}>
              <Link
                to={"/"}
                component={RouterLink}
                sx={{ textDecoration: "none", color: "black" }}
              >
                <Typography
                  variant="h4"
                  fontWeight={900}
                  fontStyle={"italic"}
                  fontFamily={"fantasy"}
                >
                  Clean Youtube
                </Typography>
              </Link>
              <Typography variant="body1">By Asem Iqbal</Typography>
            </Stack>
            <Button variant={"contained"} onClick={handleClickOpen}>
              Add PlayList
            </Button>
            <PlaylistForm
              open={open}
              handleClose={handleClose}
              hundelsubmit={getPlaylistId}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default Navbar;

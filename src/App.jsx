import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./COMPONENTS/NAVBAR";
import NotFound from "./PAGES/NOT_FOUND_PAGE";
import useplaylist from "./HOOKS/useplaylist";
import HomePage from "./PAGES/HOME_PAGE";
import Player from "./PAGES/PLAYER_PAGE";
import PlayPage from "./PAGES/PLAY_PAGE";
const App = () => {
  const {
    getPlaylistByID,
    playlists,
    error,
    loading,
    addToFavorite,
    addToRecent,
    favotites,
    removeFormFavorite,
    ClearRecents,
    ClearFavorites,
    getRecents: recents,
    getFavorites,
  } = useplaylist();
  const playlistArray = Object.values(playlists);

  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Navbar getPlaylistById={getPlaylistByID} />
        <Container maxWidth={"lg"} sx={{ my: 16 }}>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  playlistArray={playlistArray}
                  addToFavorite={addToFavorite}
                  addToRecent={addToRecent}
                  removeFormFavorite={removeFormFavorite}
                  favotites={favotites}
                  recents={recents}
                  getFavorites={getFavorites}
                  ClearRecents={ClearRecents}
                  ClearFavorites={ClearFavorites}
                />
              }
            />
            <Route
              path="/player/:playlistId"
              element={<Player playlists={playlists} />}
            />
            <Route
              path="/player/:playlistId/play/:videoId"
              element={<PlayPage />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};
export default App;

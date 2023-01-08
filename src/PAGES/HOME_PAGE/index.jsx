import { Button, Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import AllPlaylists from "../../COMPONENTS/ALL_PLAYLISTS";
import FavoritePlaylist from "../../COMPONENTS/FAVORITE_PLAYLISTS";
import RecentPlaylists from "../../COMPONENTS/RECENT_PLAYLISTS";

const HomePage = ({
  playlistArray,
  addToFavorite,
  favotites,
  removeFormFavorite,
  addToRecent,
  recents,
  getFavorites,
  ClearRecents,
  ClearFavorites,
}) => {
  return (
    <>
      {recents.length > 0 ? (
        <>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant={"h4"} fontWeight={900}>
              Recent Playlists
            </Typography>
            <Button
              onClick={ClearRecents}
              sx={{ border: "0.5px solid skyblue" }}
            >
              Clear Recent History
            </Button>
          </Stack>

          <RecentPlaylists
            playlistArray={recents}
            addToFavorite={addToFavorite}
            favotites={favotites}
            removeFormFavorite={removeFormFavorite}
            addToRecent={addToRecent}
          />
        </>
      ) : (
        <Typography variant={"h4"} fontWeight={900}>
          No Recent Playlist Here !
        </Typography>
      )}
      <Divider sx={{ my: 6 }} />
      <>
        {getFavorites.length > 0 ? (
          <>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant={"h4"} fontWeight={900}>
                Favorite Playlists
              </Typography>
              <Button
                onClick={ClearFavorites}
                sx={{ border: "0.5px solid skyblue" }}
              >
                Clear Favorites History
              </Button>
            </Stack>
            <FavoritePlaylist
              playlistArray={getFavorites}
              addToFavorite={addToFavorite}
              favotites={favotites}
              removeFormFavorite={removeFormFavorite}
              addToRecent={addToRecent}
            />
          </>
        ) : (
          <Typography variant={"h4"} fontWeight={900}>
            No Favorite Playlist Here !
          </Typography>
        )}

        <Divider sx={{ my: 6 }} />
      </>
      {playlistArray.length > 0 ? (
        <>
          <Typography variant={"h4"} fontWeight={900}>
            All Playlist
          </Typography>
          <AllPlaylists
            playlistArray={playlistArray}
            addToFavorite={addToFavorite}
            favotites={favotites}
            removeFormFavorite={removeFormFavorite}
            addToRecent={addToRecent}
          />
        </>
      ) : (
        <Typography variant={"h4"} fontWeight={900}>
          No All Playlist Here !
        </Typography>
      )}
    </>
  );
};
export default HomePage;

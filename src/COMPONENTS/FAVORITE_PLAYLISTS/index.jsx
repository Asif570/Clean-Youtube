import { Divider, Grid } from "@mui/material";
import PlaylistCard from "../../COMPONENTS/PLAYLIST_CARD";

const FavoritePlaylist = ({
  playlistArray,
  addToFavorite,
  favotites,
  removeFormFavorite,
  addToRecent,
}) => {
  return (
    <Grid container alignItems={"stretch"}>
      {playlistArray.length > 0 && (
        <>
          {playlistArray.map((playlist, i) => {
            const {
              playlistThumbnail,
              playlistTitel,
              channelTitle,
              playlistId,
            } = playlist;
            return (
              <Grid item sm={12} md={6} lg={4} xl={3} key={i} marginBottom={2}>
                <PlaylistCard
                  playlistThumbnail={playlistThumbnail}
                  playlistTitel={playlistTitel}
                  channelTitle={channelTitle}
                  playlistId={playlistId}
                  addToFavorite={addToFavorite}
                  addToRecent={addToRecent}
                  removeFormFavorite={removeFormFavorite}
                  favotites={favotites}
                />
              </Grid>
            );
          })}
        </>
      )}
    </Grid>
  );
};
export default FavoritePlaylist;

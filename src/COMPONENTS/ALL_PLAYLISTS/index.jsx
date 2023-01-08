import { Divider, Grid } from "@mui/material";
import PlaylistCard from "../../COMPONENTS/PLAYLIST_CARD";

const AllPlaylists = ({
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
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                key={i}
                marginBottom={2}
              >
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
export default AllPlaylists;

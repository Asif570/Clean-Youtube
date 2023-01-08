import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
const PlaylistCard = ({
  playlistThumbnail,
  playlistTitel,
  channelTitle,
  playlistId,
  addToFavorite,
  favotites,
  removeFormFavorite,
  addToRecent,
}) => {
  const addfavorithundel = () => {
    addToFavorite(playlistId);
  };
  const removefavoritehundel = () => {
    removeFormFavorite(playlistId);
  };
  const addrecenthundel = () => {
    addToRecent(playlistId);
  };
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        margin: 2,
      }}
    >
      <CardMedia
        component="img"
        image={playlistThumbnail.url}
        alt={playlistTitel}
      />
      <CardContent>
        <Typography variant="h6" color="text.primary" textAlign={"justify"}>
          {playlistTitel.length > 40
            ? playlistTitel.substr(0, 35) + " ......"
            : playlistTitel}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {channelTitle}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }}></Box>
      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          to={`/player/${playlistId}`}
          onClick={addrecenthundel}
          component={Link}
        >
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <PlayCircleIcon />
            <Typography variant="body2" fontWeight={600}>
              Start Playlist
            </Typography>
          </Stack>
        </Button>
        {favotites.includes(playlistId) ? (
          <Button onClick={removefavoritehundel}>
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <FavoriteIcon />
              <Typography variant="body2" fontWeight={600}>
                Unlike
              </Typography>
            </Stack>
          </Button>
        ) : (
          <Button onClick={addfavorithundel}>
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <FavoriteBorderIcon />
              <Typography variant="body2" fontWeight={600}>
                Like
              </Typography>
            </Stack>
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
export default PlaylistCard;

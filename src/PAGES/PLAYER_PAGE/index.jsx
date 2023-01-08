import { Container } from "@mui/system";
import { Link as RouterLink, useParams } from "react-router-dom";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button, Link, Stack } from "@mui/material";

import Back from "../../UTILS/BackUtilFunc";
const Player = ({ playlists }) => {
  const { playlistId } = useParams();
  const { channelTitle, playlistTitel, playlistItems } = playlists[playlistId];

  return (
    <>
      <Back />
      <Container>
        <Stack>
          <Typography variant="h4" fontWeight={900}>
            {playlistTitel}
          </Typography>
          <Typography variant="body1">By {channelTitle}</Typography>
        </Stack>
        <Typography variant="body1">
          Total {playlistItems.length} Items
        </Typography>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {playlistItems.map((item, i) => {
            const { videoTitel, videoDescription, thumbnail, videoId } = item;

            return (
              <Link
                to={`play/${videoId}`}
                key={i}
                component={RouterLink}
                sx={{ textDecoration: "none" }}
              >
                <ListItem alignItems="flex-start" sx={{ my: 2, gap: 2 }}>
                  <ListItemAvatar>
                    <Avatar
                      alt="!"
                      src={thumbnail ? thumbnail.url : " "}
                      variant="square"
                      sx={{ width: "100%", height: "100px" }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="h6"
                          color="text.primary"
                        >
                          {i}. {videoTitel ?? ""}
                        </Typography>
                      </React.Fragment>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                          textAlign={"justify"}
                        >
                          {videoDescription.substr(0, 280) ?? ""}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider light />
              </Link>
            );
          })}
        </List>
      </Container>
    </>
  );
};
export default Player;

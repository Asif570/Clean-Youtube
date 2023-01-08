import { AspectRatio, Sheet } from "@mui/joy";
import { CardMedia, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usePlay from "../../HOOKS/usePlay";
import Back from "../../UTILS/BackUtilFunc";

const PlayPage = () => {
  const [state, setState] = useState(null);
  const { videoId } = useParams();
  useEffect(() => {
    usePlay(videoId).then((data) => {
      setState(data);
    });
  }, []);
  let data;
  if (state) {
    data = state.split(" ")[3].split("=")[1].split("www.")[1].split('"')[0];
  }

  return (
    <>
      <Back />
      <Container id="target" sx={{ width: "100%", aspectRatio: 3 / 2 }}>
        <Sheet sx={{ width: "100%", borderRadius: "md", overflow: "auto" }}>
          <AspectRatio>
            <CardMedia
              component="iframe"
              sx={{ width: "100%", height: "100%" }}
              src={`https://www.${data}`}
              alt="Video Content"
            />
          </AspectRatio>
        </Sheet>
      </Container>
    </>
  );
};
export default PlayPage;

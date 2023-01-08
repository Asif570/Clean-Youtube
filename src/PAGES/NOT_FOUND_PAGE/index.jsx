import { Typography } from "@mui/material";
import { Container } from "@mui/system";

const NotFound = () => {
  return (
    <Container>
      <Typography
        variant="h3"
        textAlign={"center"}
        fontWeight={"900"}
        marginBottom={2}
      >
        Opss....!!! !! !
      </Typography>
      <Typography variant="h3" textAlign={"center"}>
        404 Page Not Found
      </Typography>
    </Container>
  );
};
export default NotFound;

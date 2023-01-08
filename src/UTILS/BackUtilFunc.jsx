import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button } from "@mui/joy";
const fun = () => window.history.go(-1);
const Back = () => {
  return (
    <Button onClick={fun}>
      <KeyboardBackspaceIcon sx={{ fontSize: "3rem" }} />
    </Button>
  );
};
export default Back;

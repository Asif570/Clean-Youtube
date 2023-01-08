import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

const PlaylistForm = ({ handleClose, open, hundelsubmit }) => {
  const [state, setState] = useState("");
  const onSubmit = () => {
    hundelsubmit(state);
    setState("");
    handleClose();
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add To Playlist</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Enter A valid PlayList Id
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="PlaylistId"
            fullWidth
            onChange={(e) => {
              setState(e.target.value);
            }}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default PlaylistForm;

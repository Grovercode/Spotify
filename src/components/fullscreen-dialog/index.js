import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { PLAYLIST_MAPPER } from "../../config/utils";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({
  open,
  setOpen,
  MusicFinderDialog,
  color,
  selectedPlaylistId,
}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{
            background: `linear-gradient(135deg, ${color} 0%, #000 100%)`,
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography
              sx={{
                ml: 2,
                flex: 1,
                justifyContent: "center",
                fontFamily: "inherit",
                fontSize: "24px",
                display: "flex",
                marginLeft: "-30px",
              }}
              variant="h6"
              component="div"
            >
              {PLAYLIST_MAPPER[selectedPlaylistId]}
            </Typography>
          </Toolbar>
        </AppBar>
        <MusicFinderDialog />
      </Dialog>
    </div>
  );
}

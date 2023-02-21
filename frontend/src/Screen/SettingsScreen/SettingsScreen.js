import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import { Button, Stack, Box } from "@mui/material/";
import GroupIcon from "@mui/icons-material/Group";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { Modal } from "@mui/material";
import { useState } from "react";
import UpdatePasswordScreen from "./UpdatePassword";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 26,
  p: 4,
};

function SettingsScreen() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <NavigationBar />
      <div style={{ margin: "30px", marginTop: "30px" }}>
        <h2>Settings</h2>
        <hr
          style={{
            marginTop: "10px",
            backgroundColor: "#24a0ed",
            height: "1px",
          }}
        />
        <div style={{ marginTop: "20px" }}>
          <Stack direction="row" spacing={2}>
            <Button variant="contained">
              <EmailIcon style={{ marginRight: "10px" }} />
              Update Email
            </Button>

            <Button variant="contained" onClick={handleOpen}>
              <LockIcon style={{ marginRight: "10px" }} />
              Update Password
            </Button>
            <Modal open={open} onClose={handleClose}>
              <Box sx={style}>
                <UpdatePasswordScreen />
              </Box>
            </Modal>
            <Button variant="contained">
              <GroupIcon style={{ marginRight: "10px" }} />
              View All Users
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default SettingsScreen;

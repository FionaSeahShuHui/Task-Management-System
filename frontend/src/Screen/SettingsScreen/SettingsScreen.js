import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function SettingsScreen() {
  return (
    <div>
      <NavigationBar />
      <div style={{ margin: "30px", marginTop: "30px" }}>
        <h2>Settings</h2>
        <hr style={{ marginTop: "10px" }} />
        <div style={{ marginTop: "20px" }}>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" style={{ background: "black" }}>
              Update Particulars
            </Button>
            <Button variant="contained" style={{ background: "black" }}>
              Update Password
            </Button>
            <Button variant="contained" style={{ background: "black" }}>
              View All Users
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default SettingsScreen;

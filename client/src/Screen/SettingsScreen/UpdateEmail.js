import { Box, TextField, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function UpdateEmailScreen() {
  function updateEmailButton() {
    alert("Update Email");
  }
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Update Email Address</h2>
      <hr style={{ marginTop: "20px" }}></hr>
      <form onSubmit={updateEmailButton}>
        {/* Email Text Field  */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            marginLeft: "20px",
            marginRight: "20px",
            marginTop: "30px",
          }}
        >
          <EmailIcon sx={{ color: "action.active", mr: 1, my: 2 }} />
          <TextField
            fullWidth
            label="Update Email Address"
            variant="outlined"
            autoFocus
          />
        </Box>
        {/* Submit Button  */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            marginRight: "20px",
            marginTop: "20px",
            marginBottom: "10px",
          }}
        >
          <Button
            variant="contained"
            type="submit"
            startIcon={<MailOutlineIcon />}
            sx={{ width: "100%", marginTop: "10px", height: "50px" }}
          >
            Update Email Address
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default UpdateEmailScreen;

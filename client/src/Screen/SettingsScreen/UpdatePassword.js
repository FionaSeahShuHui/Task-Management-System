import { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { Key, Visibility, VisibilityOff } from "@mui/icons-material";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";

function UpdatePasswordScreen() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const handleClickShowOldPassword = () => setShowOldPassword((show) => !show);

  const [showNewPassword, setShowNewPassword] = useState(false);
  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  function changePasswordButton() {
    alert("Password Successfully Changed!");
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Update Password</h2>
      <hr style={{ marginTop: "20px" }}></hr>
      <form onSubmit={changePasswordButton}>
        {/* Old Password */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            marginLeft: "20px",
            marginRight: "20px",
            marginTop: "30px",
          }}
        >
          <Key sx={{ color: "action.active", mr: 1, my: 2 }} />
          <FormControl
            sx={{ m: 0, width: "100%" }}
            variant="outlined"
          >
            <InputLabel>Old Password</InputLabel>
            <OutlinedInput
              id="passwordField"
              type={showOldPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowOldPassword}
                    edge="end"
                  >
                    {showOldPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Box>
        {/* New Password */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            marginLeft: "20px",
            marginRight: "20px",
            marginTop: "30px",
          }}
        >
          <Key sx={{ color: "action.active", mr: 1, my: 2 }} />
          <FormControl sx={{ m: 0, width: "100%" }} variant="outlined">
            <InputLabel>New Password</InputLabel>
            <OutlinedInput
              id="passwordField"
              type={showNewPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowNewPassword}
                    edge="end"
                  >
                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Box>
        {/* Confirm Password */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            marginLeft: "20px",
            marginRight: "20px",
            marginTop: "30px",
          }}
        >
          <Key sx={{ color: "action.active", mr: 1, my: 2 }} />
          <FormControl sx={{ m: 0, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="passwordField">
              Confirmation Password
            </InputLabel>
            <OutlinedInput
              id="passwordField"
              type={showConfirmPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Box>
        {/* Change Password Button  */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            marginRight: "20px",
            marginTop: "30px",
            marginBottom: "10px",
          }}
        >
          <Button
            variant="contained"
            type="submit"
            startIcon={<EnhancedEncryptionIcon />}
            sx={{ width: "100%", marginTop: "10px", height: "50px" }}
          >
            Change Password
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default UpdatePasswordScreen;

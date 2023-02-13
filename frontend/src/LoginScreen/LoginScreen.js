import * as React from "react";
// import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import {
  AccountCircle,
  Key,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";

function LoginScreen() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  //   const navigate = useNavigate();

  function LoginButton() {
    alert("Login Buttton Pressed. ");
  }

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <Box
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1 style={{ margin: "20px" }}>Task Management System</h1>
        <form onSubmit={LoginButton}>
          <div
            style={{
              marginLeft: "20px",
              marginRight: "20px",
              marginTop: "40px",
            }}
          >
            {/* Username Field  */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 2 }} />
              <TextField
                id="usernameField"
                fullWidth
                label="Username"
                variant="outlined"
                autoFocus
              />
            </Box>
            {/* Password Field  */}
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
                <InputLabel htmlFor="passwordField">Password</InputLabel>
                <OutlinedInput
                  id="passwordField"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Box>
            {/* Login Button  */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
                marginRight: "20px",
                marginTop: "20px",
                marginBottom: "40px",
              }}
            >
              <Button
                variant="contained"
                type="submit"
                startIcon={<LoginIcon />}
                sx={{ width: "100%", marginTop: "10px", height: "50px" }}
              >
                Login
              </Button>
            </Box>
          </div>
        </form>
      </Box>
    </div>
  );
}

export default LoginScreen;

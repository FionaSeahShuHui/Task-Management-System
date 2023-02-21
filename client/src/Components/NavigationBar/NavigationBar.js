import { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import LogoutIcon from "@mui/icons-material/Logout";
import "./NavigationBar.css";
import { Button } from "@mui/material";

function NavigationBar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <header>
        <h3>Task Management System</h3>
        <nav ref={navRef}>
          <a href="/home">
            <HomeIcon sx={{ m: -0.5, marginRight: "10px" }} />
            Home
          </a>
          <a href="/home">
            <ViewColumnIcon sx={{ m: -0.5, marginRight: "10px" }} />
            Kanban Board
          </a>
          <a href="/settings">
            <SettingsIcon sx={{ m: -0.5, marginRight: "10px" }} />
            Settings
          </a>
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <CloseIcon />
          </button>
        </nav>
        <Button variant="outlined" startIcon=<LogoutIcon />>
          {" "}
          Log Out
        </Button>
        <button className="nav-btn" onClick={showNavBar}>
          <MenuIcon />
        </button>
      </header>
    </div>
  );
}

export default NavigationBar;

import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Container from "@mui/material/Container";

function HomeScreen() {
  return (
    <div>
      <NavigationBar />
      <h1
        style={{
          justifyContent: "center",
          textAlign: "center",
          marginTop: "150px",
          lineHeight: "70px",
        }}
      >
        Welcome, <br />
        username
      </h1>
    </div>
  );
}

export default HomeScreen;

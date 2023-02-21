import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginScreen from "./Screen/LoginScreen/LoginScreen";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import SettingsScreen from "./Screen/SettingsScreen/SettingsScreen";

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<LoginScreen />} />
      <Route exact path="/home" element={<HomeScreen />} />
      <Route exact path="/settings" element={<SettingsScreen />} />
    </Routes>
  </Router>
);

export default App;

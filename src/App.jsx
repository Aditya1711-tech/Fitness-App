import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/exercise/:id">
          <ExerciseDetails />
        </Route>
      </Switch>
      <Footer />
    </Box>
  );
}

export default App;

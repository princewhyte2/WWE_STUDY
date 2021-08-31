import React from "react";
import "./App.css";
import NavigationBar from "./components/Navigation";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Bg from "images/firstroundblue.svg";
import Signup from "pages/Signup";

const useStyles = makeStyles((theme) => ({}));
function App() {
  return (
    <div className="App">
      <div>
        <NavigationBar />
      </div>
      <div className="Content">
        <Signup />
      </div>
    </div>
  );
}

export default App;

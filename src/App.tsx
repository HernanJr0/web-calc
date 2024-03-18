import { Card, Typography } from "@mui/material";
import "./app.css";
import Keyboard from "./components/Keyboard";
import Display from "./components/Display";

function App() {
  return (
    <main>
      <Card id="card">
        <Typography sx={{ textAlign: "center", fontSize:"12px" }}>Web Calc</Typography>
        <Display />
        <Keyboard />
      </Card>
    </main>
  );
}

export default App;

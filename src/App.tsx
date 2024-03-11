import { Card, Typography } from "@mui/material";
import "./app.css";
import Keyboard from "./components/Keyboard";
import Display from "./components/Display";

function App() {
  return (
    <main>
      <Card>
        <Typography sx={{ textAlign: "center" }}>Web Calc</Typography>
        <Display />
        <Keyboard />
      </Card>
    </main>
  );
}

export default App;

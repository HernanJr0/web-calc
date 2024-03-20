import { Grid } from "@mui/material";
import "./index.css"


function Display() {

  
  return (
    <Grid id="display">

      <input type="text" id="exp" value="" onKeyDown={() => document.activeElement?.blur()}/>
      
    </Grid>
  );
}



export default Display;

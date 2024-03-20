import { Grid } from "@mui/material";
import Botao from "./Botao";
import { Backspace } from "@mui/icons-material";

function Keyboard() {
  return (
    <div id="kb">

      <Grid>
        <Grid>
          <Botao>7</Botao>
          <Botao>8</Botao>
          <Botao>9</Botao>
        </Grid>
        <Grid>
          <Botao>4</Botao>
          <Botao>5</Botao>
          <Botao>6</Botao>
        </Grid>
        <Grid>
          <Botao>1</Botao>
          <Botao>2</Botao>
          <Botao>3</Botao>
        </Grid>
        <Grid>
          <Botao>0</Botao>
          <Botao>.</Botao>
          <Botao props="del"> <Backspace sx={{
            fontSize: {
              xs: "calc(3vh + 4vw)",
              sm: "calc(4vh + 18px)"
            },
          }} /> </Botao>
        </Grid>
      </Grid>


      <Grid>
        <Grid><Botao>/</Botao></Grid>
        <Grid><Botao>*</Botao></Grid>
        <Grid><Botao>-</Botao></Grid>
        <Grid><Botao>+</Botao></Grid>
      </Grid>

    </div>
  );
}

export default Keyboard;

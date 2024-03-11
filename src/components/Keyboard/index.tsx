import { Button, Grid } from "@mui/material";

function Keyboard() {
  return (
    <Grid>
      <Grid>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>+</Button>
      </Grid>
      <Grid>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>-</Button>
      </Grid>
      <Grid>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>*</Button>
      </Grid>
      <Grid>
        <Button>0</Button>
        <Button>.</Button>
        <Button>=</Button>
        <Button>/</Button>
      </Grid>
    </Grid>
  );
}

export default Keyboard;

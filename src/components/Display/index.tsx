import { Grid, Typography } from "@mui/material";

function Display() {
  return (
    <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Typography sx={{ width: "auto" }}>Display</Typography>
    </Grid>
  );
}

export default Display;

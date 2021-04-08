import { Button, Grid, MenuItem, Select } from "@material-ui/core";

type Props = {
  
};
export const Mapping = (props: Props) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={9}>
        <div id="map"></div>
      </Grid>
      <Grid item xs={12} sm={3}>
        <form>
          <Select fullWidth>
            <MenuItem value="">
              <em>Select one run</em>
            </MenuItem>
            <MenuItem value="1">
              <em>First</em>
            </MenuItem>
          </Select>
          <Button type="submit" color="primary" variant="contained">Start</Button>
        </form>
      </Grid>
    </Grid>
  );
};
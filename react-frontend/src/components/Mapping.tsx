import { Button, Grid, MenuItem, Select } from "@material-ui/core";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { Route } from "../util/models";

const API_URL = process.env.REACT_APP_API_URL

type Props = {};
export const Mapping = (props: Props) => {
  const[routes, setRoutes] = useState<Route[]>([]);
  const[routeIdSelected, setRouteIdSelected] = useState<string>("");

  useEffect(() => {
    console.log(API_URL);
    
    fetch(`${API_URL}/routes`)
    .then((data) => data.json())
    .then((data) => setRoutes(data))
  }, [])

  const startRoute = useCallback((event: FormEvent) => {
    event.preventDefault()
    console.log(routeIdSelected);
    
  }, [routeIdSelected])

  return (
    <Grid container>
      <Grid item xs={12} sm={9}>
        <div id="map"></div>
      </Grid>
      <Grid item xs={12} sm={3}>
        <form onSubmit={startRoute}>
          <Select 
            fullWidth 
            displayEmpty
            value={routeIdSelected} 
            onChange={(event) => setRouteIdSelected(event.target.value + "")}
          >
            <MenuItem value="">
              <em>Select one run</em>
            </MenuItem>
            {routes.map((route, key) => (
              <MenuItem key={key} value={route._id}>
                {route.title}
              </MenuItem>
            ))}
          </Select>
          <Button type="submit" color="primary" variant="contained">Start</Button>
        </form>
      </Grid>
    </Grid>
  );
};
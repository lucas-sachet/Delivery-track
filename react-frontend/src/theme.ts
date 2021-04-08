import { createMuiTheme } from "@material-ui/core";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

const palette: PaletteOptions ={
  type: 'dark',
  primary: {
    main: '#00704A',
    contrastText: '#343536'
  },
  background: {
    default: '#343536'
  },
}

const theme = createMuiTheme({
  palette,
})

export default theme;
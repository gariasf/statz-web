import { createMuiTheme, Theme } from '@material-ui/core/styles'
import { red, lightBlue } from '@material-ui/core/colors'

// Create a theme instance.
const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f5f5f5',
    },
    secondary: {
      main: '#424242',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#ecf0f1',
    },
  },
  typography: {
    fontFamily: [
      'Nunito Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

export default theme

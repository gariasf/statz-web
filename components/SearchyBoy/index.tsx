import DirectionsIcon from '@material-ui/icons/Directions'
import { makeStyles, Theme, createStyles, InputBase, Paper, IconButton, Divider } from '@material-ui/core'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      //   border: '1px solid rgba(0,0,0,.1)'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
)

export default function SearchyBoy() {
  const classes = useStyles({})

  return (
    <Paper variant="outlined" component="form" className={`${classes.root} outlined`}>
      <InputBase
        autoFocus
        className={classes.input}
        placeholder="Search Players"
        inputProps={{ 'aria-label': 'search players', label: 'Search players' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="directions">
        <AccountCircleOutlinedIcon />
      </IconButton>
    </Paper>
  )
}

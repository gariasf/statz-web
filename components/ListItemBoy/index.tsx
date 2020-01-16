import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ImageIcon from '@material-ui/icons/Image'

// @ts-ignore
import styles from './styles.scss'
import { Link } from '@material-ui/core'

export default function ListItemBoy(props) {
  return (
    // <Link component="li" hidden>
      <ListItem button component="a" className={styles.listItem} href={`/player/${props.uuid}`}>
        <ListItemAvatar>
          <Avatar>
            <img src={`https://minotar.net/helm/${props.uuid}/38`} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.playerName} secondary={props.uuid} />
      </ListItem>
    // </Link>
  )
}

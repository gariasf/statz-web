import React, { Children, Props } from 'react'
// @ts-ignore
import styles from './styles.scss'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import { Toolbar, useScrollTrigger, Zoom, Fab, Box } from '@material-ui/core'
import { Header } from '../Header'
import Meta from '../Meta'

export const Layout: React.FunctionComponent = props => {
  return (
    <Box className={styles.root}>
      <Meta />
      <Header />
      <Toolbar />
      {props.children}
    </Box>
  )
}

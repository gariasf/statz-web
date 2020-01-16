import React, { Children, Props } from 'react'
// @ts-ignore
import styles from './styles.scss'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import { Toolbar, useScrollTrigger, Zoom, Fab, Box, Typography } from '@material-ui/core'
import { Header } from '../Header'
import Meta from '../Meta'

export const Layout: React.FunctionComponent = props => {
  return (
    <Box className={styles.root} mx="auto">
      <Meta />
      <Box
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={styles.mainWrapper}
      >
        {props.children}
      </Box>
    </Box>
  )
}

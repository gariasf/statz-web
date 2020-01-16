import React from 'react'
import { Container, Box } from '@material-ui/core'
import SidebarBoy from '../components/SidebarBoy'

// @ts-ignore
import styles from './index.scss'
import SearchyBoy from '../components/SearchyBoy'
import PlayerListBoy from '../components/PlayerListBoy'

export default function Index() {
  return (
    <Box width="95%" mx="auto" display="flex" className={styles.mainContainer}>
      <Box component="main" display="flex" justifyContent="flex-start" flexGrow={1} flexDirection="column" className={styles.main}>
          <SearchyBoy />
          <PlayerListBoy />
      </Box>
      <Box component="aside" className={styles.sidebar}>
        <SidebarBoy />
      </Box>
    </Box>
  )
}

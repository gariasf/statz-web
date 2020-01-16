import List from '@material-ui/core/List';
import React from 'react';
import ListItemBoy from '../ListItemBoy';
import usePlayerList from '../usePlayerList';
import { Scrollbars } from 'react-custom-scrollbars';
// @ts-ignore
import styles from './styles.scss';


const renderPlayerList = (playerList) => {
    return playerList.map((player) => {
        return <ListItemBoy key={player.uuid} uuid={player.uuid} playerName={player.playerName} />
    })
}

export default function PlayerListBoy() {
  const playerList = usePlayerList();
  
  return (
    <Scrollbars universal className={styles.root} autoHide style={{height: 'calc(100vh - 172px)'}} >
        { playerList ? renderPlayerList(playerList): <p>Loading...</p> }
    </Scrollbars>
  );
}

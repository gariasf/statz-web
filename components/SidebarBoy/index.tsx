import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// @ts-ignore
import styles from './styles.scss'
import usePlayerList from '../usePlayerList';

export default function SidebarBoy() {
const players = usePlayerList()

  return (
    <Card className={styles.card} variant="outlined">
      <CardContent>
        <Typography className={styles.title} color="textSecondary" gutterBottom>
          Statistics info
        </Typography>
        <Typography variant="h5" component="h2">
          {players ? players.length : 0}
        </Typography>
        <Typography className={styles.pos} color="textSecondary">
          tracked players
        </Typography>
      </CardContent>
    </Card>
  );
}

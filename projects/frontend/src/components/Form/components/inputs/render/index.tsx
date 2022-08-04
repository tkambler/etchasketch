import * as React from 'react';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingTop: 6,
    },
  })
);

export default function RenderInput(props): React.ReactElement {
  const styles = useStyles();
  return <div className={styles.root}>{props.render(props)}</div>;
}

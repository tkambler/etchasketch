import * as React from 'react';
import Typography from '@mui/material/Typography';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import { makeStyles } from '@mui/styles';
import { context } from './context';

type HeadingProps = {
  id: string;
  label: string;
  index: number;
};

const useStyles = makeStyles(() => ({
  root: (props: HeadingProps) => ({
    padding: 15,
    borderTop: props.index === 0 ? undefined : '1px solid rgba(0, 0, 0, 0.23)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.23)',
    flexGrow: 0,
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#F3F6F9',
    alignItems: 'center',
  }),
  label: {
    fontSize: '1em',
    fontWeight: 700,
  },
  icon: {
    cursor: 'pointer',
  },
}));

export function Heading(props: HeadingProps): React.ReactElement {
  const { id, index, label } = props;
  const { state, toggle } = React.useContext(context);
  const expanded = state.expanded.indexOf(id) > -1;
  const styles = useStyles(props);

  return (
    <div className={styles.root}>
      <Typography variant="h5" className={styles.label}>
        {label}
      </Typography>
      {expanded ? (
        <ExpandMore
          className={styles.icon}
          onClick={toggle.bind(undefined, id)}
        />
      ) : (
        <ExpandLess
          className={styles.icon}
          onClick={toggle.bind(undefined, id)}
        />
      )}
    </div>
  );
}

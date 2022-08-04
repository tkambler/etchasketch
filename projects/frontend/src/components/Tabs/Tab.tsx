import * as React from 'react';
import * as types from './types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: (props: types.TabProps) => ({
    display: props.active ? 'flex' : 'none',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flexStart',
    flexGrow: 1,
    overflowY: 'auto',
    padding: '1rem',
  }),
}));

export function Tab(props: types.TabProps): React.ReactElement {
  const { hasRendered } = props;
  const styles = useStyles(props);

  if (!hasRendered) {
    return null;
  }

  return <div className={styles.root}>{props.children}</div>;
}

Tab.defaultProps = {
  padding: 0,
  enabled: true,
};

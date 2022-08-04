import * as React from 'react';
import { makeStyles } from '@mui/styles';
import classnames from 'classnames';

type ContentProps = {
  children: any;
  padding: boolean;
  style: any;
};

const useStyles = makeStyles((theme) => ({
  root: (props: ContentProps) => ({
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
  }),
}));

export function Content(props: ContentProps): React.ReactElement {
  const { style } = props;
  const styles = useStyles(props);
  const classname = classnames([styles.root, style]);

  return <div className={classname}>{props.children}</div>;
}

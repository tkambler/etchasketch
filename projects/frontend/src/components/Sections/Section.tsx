import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Content } from './Content';
import { context } from './context';

type SectionProps = {
  children: any;
  label: string;
  id: string;
  index?: number;
  padding?: boolean;
  collapse?: boolean;
};

const useStyles = makeStyles(() => ({
  root: (
    props: SectionProps & { layout: 'static' | 'fluid'; expanded: boolean }
  ) => ({
    padding: props.padding ? 15 : 0,
    flexGrow: props.layout === 'fluid' ? 1 : undefined,
    display: props.expanded ? 'flex' : 'none',
    flexDirection: 'column',
  }),
}));

export function Section(props: SectionProps): React.ReactElement {
  const { id, children, index, padding = true } = props;
  const { layout, state } = React.useContext(context);
  const expanded = state.expanded.indexOf(id) > -1;
  const styles = useStyles({
    layout,
    children,
    index,
    expanded,
  } as any);

  return (
    <Content padding={padding} style={styles.root}>
      {children}
    </Content>
  );
}

Section.defaultProps = {
  collapse: false,
};

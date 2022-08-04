import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Heading } from './Heading';
import { Section } from './Section';
import { context } from './context';
import { without } from 'lodash';

type SectionsProps = {
  children: any;
  layout?: 'static' | 'fluid';
};

type FlexWrapperProps = {
  children: any;
};

const useStyles = makeStyles(() => ({
  root: () => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
  }),
}));

function FlexWrapper(props: FlexWrapperProps): React.ReactElement {
  const { children } = props;
  const { layout } = React.useContext(context);
  const styles = useStyles(props);

  if (layout === 'static') {
    return children;
  }

  return <div className={styles.root}>{children}</div>;
}

export function Sections(props: SectionsProps): React.ReactElement {
  const { layout = 'static' } = props;
  const [state, setState] = React.useState({
    expanded: (() => {
      const any = React.Children.toArray(props.children).reduce(
        (result: string[], child: any) => {
          if (!child.props.collapse) {
            result.push(child.props.id);
          }
          return result;
        },
        []
      );
      return any;
    })(),
    // expanded: React.Children.map(props.children, (child) => child.props.id),
  });

  const toggle = React.useCallback(
    (id) => {
      if ((state.expanded as string[]).indexOf(id) > -1) {
        setState({
          ...state,
          expanded: without(state.expanded, id),
        });
      } else {
        setState({
          ...state,
          expanded: [...(state.expanded as string[]), id],
        });
      }
    },
    [state]
  );

  const stateRef = React.useRef({
    expanded: [],
  });

  React.useEffect(() => {
    (stateRef.current.expanded as any) = state.expanded;
  }, [state]);

  const children = React.useMemo(() => {
    const children = React.Children.toArray(props.children);
    const result = [];
    children.forEach((child, idx) => {
      result.push(
        <Heading
          id={(child as any).props.id}
          index={idx}
          label={(child as any).props.label}
        />
      );
      result.push(child);
    });
    return result;
  }, [props.children]);

  return (
    <context.Provider
      value={{
        layout,
        state,
        toggle,
      }}
    >
      <FlexWrapper>
        {React.Children.map(children, (child, index) => {
          if ((child as any).type === Section) {
            return React.cloneElement(child as any, {
              index,
            });
          } else {
            return child;
          }
        })}
      </FlexWrapper>
    </context.Provider>
  );
}

export { Section };

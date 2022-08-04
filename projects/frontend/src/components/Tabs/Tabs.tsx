import * as React from 'react';
import { makeStyles } from '@mui/styles';
import MaterialTabs from '@mui/material/Tabs';
import MaterialTab from '@mui/material/Tab';
import * as appHooks from '@app/lib/hooks';
import { parseQueryParams, stringifyQueryParams } from '@app/lib/util/url';
import * as types from './types';
import { Tab } from './Tab';
import { TabActions } from './TabActions';

export { Tab };

const useStyles = makeStyles((theme) => ({
  root: () => ({
    backgroundColor: '#f5f5f5',
    borderTop: '1px solid rgba(0, 0, 0, 0.23)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.23)',
    display: 'flex',
    justifyContent: 'space-between',
  }),
  tabsContainer: () => ({
    width: '90%',
  }),
  actionsContainer: () => ({
    width: '10%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '1rem',
  }),
}));

export function Tabs(props: types.TabsProps): React.ReactElement {
  const { children } = props;
  const history = appHooks.useHistory();
  const styles = useStyles(props);
  const [activeTab, setActiveTab] = React.useState(() => {
    const search: any = parseQueryParams(history.location.search);
    if (!search.tab) {
      return 0;
    }
    const tabs = React.Children.toArray(children);
    const tab: any = tabs
      .filter((child: React.ReactElement) => child.type === Tab)
      .find((child) => (child as any)?.props?.id === search.tab);
    return tabs.indexOf(tab) || 0;
  });

  const [hasRendered, setHasRendered] = React.useState({
    [activeTab]: true,
  });

  const actions = React.useMemo(() => {
    const tab: any = React.Children.toArray(children)[activeTab];
    let result = props.actions || [];
    if (result.length > 0 && (tab?.props?.actions || []).length > 0) {
      result.push({
        divider: true,
      } as any);
    }
    return result.concat(tab?.props?.actions || []);
  }, [activeTab, children, hasRendered]);

  const tabs = React.useMemo(() => {
    return React.Children.toArray(children)
      .filter((child: React.ReactElement) => child.type === Tab)
      .map((child: React.ReactElement, index: number) =>
        React.cloneElement(child, {
          active: index === activeTab,
          hasRendered: hasRendered[index] || false,
        })
      );
  }, [activeTab, children, hasRendered]);

  const handleChange = React.useCallback(
    (e, index) => {
      setActiveTab(index);
      setHasRendered({
        ...hasRendered,
        [index]: true,
      });
      const tab = tabs[index];
      const parsed: any = parseQueryParams(history.location.search);
      parsed.tab = tab.props.id;
      history.push({
        search: stringifyQueryParams(parsed),
      });
    },
    [hasRendered]
  );

  return (
    <React.Fragment>
      <div className={styles.root}>
        <div className={styles.tabsContainer}>
          <MaterialTabs
            onChange={handleChange}
            value={activeTab}
            id="tabs-container"
          >
            {tabs
              .filter(
                (tab: React.ReactElement<types.TabProps>) => tab.props.enabled
              )
              .map((tab: React.ReactElement<types.TabProps>) => (
                <MaterialTab
                  key={tab.props.id}
                  label={tab.props.title}
                  id={tab.props.id}
                />
              ))}
          </MaterialTabs>
        </div>
        <div className={styles.actionsContainer}>
          <TabActions actions={actions} />
        </div>
      </div>
      {tabs}
    </React.Fragment>
  );
}

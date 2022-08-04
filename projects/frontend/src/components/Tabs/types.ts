export type Action = {
  label: string;
  fn: () => void;
  divider?: boolean;
};

export type TabsProps = {
  children?: any;
  actions?: Action[];
};

export type TabProps = {
  title: string;
  id: string;
  children?: any;
  enabled?: boolean;
  active?: boolean;
  hasRendered?: boolean;
  padding?: number;
  actions?: Action[];
};

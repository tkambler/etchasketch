import * as React from 'react';

const context = React.createContext({});

export function useFormContext() {
  return React.useContext(context);
}

export function withFormContext(Component) {
  return (props) => {
    const value = React.useRef({});
    return (
      <context.Provider value={value.current}>
        <Component {...props} />
      </context.Provider>
    );
  };
}

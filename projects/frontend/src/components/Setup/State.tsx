import * as React from 'react';

const LoginStateContext = React.createContext(null);

export function useLoginState() {
  return React.useContext(LoginStateContext);
}

function reducer(state, action) {
  switch (action.type) {
    case 'setUser':
      return {
        ...state,
        user: action.payload.value,
      };
    default:
      throw new Error();
  }
}

export function withState(Component) {
  return (props) => {
    const [state, dispatch] = React.useReducer(reducer, {
      user: null,
    });
    return (
      <LoginStateContext.Provider
        value={{
          ...state,
          dispatch,
        }}
      >
        <Component {...props} />
      </LoginStateContext.Provider>
    );
  };
}

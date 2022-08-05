import * as React from 'react';
import useReducerX from '@0y0/use-reducer-x';
import thunkMiddleware from 'redux-thunk';

const StateContext = React.createContext();

export function useState() {
  return React.useContext(StateContext);
}

function reducer(state, action) {
  switch (action.type) {
    case 'setWhiteboard':
      return {
        ...state,
        whiteboard: action.payload.value,
      };
    default:
      throw new Error();
  }
}

export function withState(Component) {
  return (props) => {
    const [state, dispatch] = useReducerX(
      reducer,
      {
        whiteboard: null,
      },
      [thunkMiddleware]
    );
    return (
      <StateContext.Provider
        value={{
          ...state,
          dispatch,
        }}
      >
        <Component {...props} />
      </StateContext.Provider>
    );
  };
}

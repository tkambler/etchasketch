import * as React from 'react';

const StateContext = React.createContext();

export function useState() {
  return React.useContext(StateContext);
}

function reducer(state, action) {
  switch (action.type) {
    case 'setStrokeSize':
      return {
        ...state,
        strokeSize: action.payload.value,
      };
    case 'setTool':
      return {
        ...state,
        tool: action.payload.value,
      };
    case 'setStrokeColor':
      return {
        ...state,
        strokeColor: action.payload.value,
      };
    default:
      throw new Error();
  }
}

export function withState(Component) {
  return (props) => {
    const [state, dispatch] = React.useReducer(reducer, {
      strokeSize: 1,
      tool: 'pen',
      strokeColor: 'black',
    });
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

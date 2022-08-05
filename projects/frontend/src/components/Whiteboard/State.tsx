import * as React from 'react';
import useReducerX from '@0y0/use-reducer-x';
import thunkMiddleware from 'redux-thunk';

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
    case 'setEmitter':
      return {
        ...state,
        emitter: action.payload.value,
      };
    case 'setWhiteboard':
      return {
        ...state,
        whiteboard: action.payload.value,
      };
    case 'setPlaying':
      return {
        ...state,
        playing: action.payload.value,
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
        strokeSize: 1,
        tool: 'pen',
        strokeColor: 'black',
        playing: false,
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

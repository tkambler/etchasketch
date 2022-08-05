import * as React from 'react';
import useReducerX from '@0y0/use-reducer-x';
import thunkMiddleware from 'redux-thunk';
import CircularProgress from '@mui/material/CircularProgress';
import { useLocation, useHistory } from '@app/lib/hooks';

import { axios } from '@app/axios';

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
    case 'initComplete':
      return {
        ...state,
        user: action.payload.user || null,
        initialized: true,
      };
    default:
      throw new Error();
  }
}

function getSession() {
  return async (dispatch, getState) => {
    try {
      const { data: session } = await axios({
        method: 'GET',
        url: '/session',
      });
      dispatch({
        type: 'initComplete',
        payload: {
          user: session,
        },
      });
    } catch (err) {
      dispatch({
        type: 'initComplete',
        payload: {
          user: null,
        },
      });
    }
  };
}

export function withState(Component) {
  return (props) => {
    const location = useLocation();
    const history = useHistory();
    const [state, dispatch] = useReducerX(
      reducer,
      {
        user: null,
        initialized: false,
      },
      [thunkMiddleware]
    );
    React.useEffect(() => {
      if (!state.initialized) {
        dispatch(getSession());
      }
    }, [state.initialized]);
    React.useEffect(() => {
      if (!state.initialized) {
        return;
      }
      if (
        state.user &&
        location.pathname !== '/dashboard' &&
        location.pathname !== '/whiteboards'
      ) {
        history.push('/dashboard');
      }
    }, [state.initialized, state.user]);
    if (!state.initialized) {
      return <CircularProgress />;
    }
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

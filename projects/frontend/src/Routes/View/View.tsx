import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Whiteboard } from '@app/components/Whiteboard/Whiteboard';
import { useHistory, useParams } from '@app/lib/hooks';
import { useState, withState } from './State';
import { compose } from 'lodash/fp';
import * as actions from './actions';

function View(): React.ReactElement {
  const params = useParams();
  const state = useState();

  React.useEffect(() => {
    state.dispatch(actions.init(params.whiteboardId));
  }, []);
  if (!state.whiteboard) {
    return <CircularProgress />;
  }

  return <Whiteboard mode="view" whiteboard={state.whiteboard} />;
}

const Composed = compose(withState)(View);
export { Composed as View };

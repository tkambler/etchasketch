import * as React from 'react';
import { Whiteboard } from '@app/components/Whiteboard/Whiteboard';

export function Create(): React.ReactElement {
  return <Whiteboard mode="create" />;
}

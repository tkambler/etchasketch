import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Setup } from '@app/components/Setup/Setup';
import { Routes } from './Routes/Routes';

function App(): React.ReactElement {
  return (
    <Setup>
      <Routes />
    </Setup>
  );
}

ReactDOM.render(<App />, document.getElementById('app-root'));

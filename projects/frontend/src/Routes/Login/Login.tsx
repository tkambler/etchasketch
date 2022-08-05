import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import * as hooks from './hooks';

export function Login(): React.ReactElement {
  const login = hooks.useLogin();
  const [state, dispatch] = hooks.useState();

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 500,
        },
      }}
    >
      <Paper
        style={{
          padding: 10,
        }}
      >
        <Stack>
          <TextField
            style={{
              marginBottom: 10,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            required
            autoFocus
            fullWidth
            value={state.username}
            onChange={(e) => {
              dispatch({
                type: 'setUsername',
                payload: {
                  value: e.target.value,
                },
              });
            }}
            label="Username"
            variant="standard"
          />
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            style={{
              marginBottom: 10,
            }}
            required
            fullWidth
            value={state.password}
            onChange={(e) => {
              dispatch({
                type: 'setPassword',
                payload: {
                  value: e.target.value,
                },
              });
            }}
            type="password"
            label="Password"
            variant="standard"
          />
          <Button
            variant="contained"
            disableElevation
            onClick={() => {
              login(state.username, state.password);
            }}
          >
            Sign In
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}

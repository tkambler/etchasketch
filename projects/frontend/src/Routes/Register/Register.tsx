import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import * as hooks from './hooks';

export function Register(): React.ReactElement {
  const [state, dispatch] = hooks.useState();
  const submit = hooks.useSubmit(state, dispatch);

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
            value={state.first_name}
            onChange={(e) => {
              dispatch({
                type: 'setFirstName',
                payload: {
                  value: e.target.value,
                },
              });
            }}
            label="First Name"
            variant="standard"
          />
          <TextField
            style={{
              marginBottom: 10,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            required
            fullWidth
            value={state.last_name}
            onChange={(e) => {
              dispatch({
                type: 'setLastName',
                payload: {
                  value: e.target.value,
                },
              });
            }}
            label="Last Name"
            variant="standard"
          />
          <TextField
            style={{
              marginBottom: 10,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            required
            fullWidth
            value={state.email}
            onChange={(e) => {
              dispatch({
                type: 'setEmail',
                payload: {
                  value: e.target.value,
                },
              });
            }}
            label="Email"
            variant="standard"
          />
          <TextField
            style={{
              marginBottom: 10,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            required
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
              submit();
            }}
          >
            Create Account
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}

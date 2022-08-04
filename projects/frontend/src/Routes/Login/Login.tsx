import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export function Login(): React.ReactElement {
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
            label="Username"
            defaultValue=""
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
            type="password"
            label="Password"
            defaultValue=""
            variant="standard"
          />
          <Button variant="contained" disableElevation>
            Sign In
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}

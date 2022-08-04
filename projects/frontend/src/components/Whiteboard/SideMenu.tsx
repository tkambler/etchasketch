import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useState } from './State';

export function SideMenu(): React.ReactElement {
  const state = useState();
  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem disabled={true}>
          <ListItemText>
            <Typography variant="button" color="text.secondary">
              Actions
            </Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={() => {}}>
          <ListItemText>Save</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => {}}>
          <ListItemText>Start Over</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem disabled={true}>
          <ListItemText>
            <Typography variant="button" color="text.secondary">
              Tool
            </Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem
          selected={state.tool === 'pen'}
          onClick={() => {
            state.dispatch({
              type: 'setTool',
              payload: {
                value: 'pen',
              },
            });
          }}
        >
          <ListItemText>Pen</ListItemText>
        </MenuItem>
        <MenuItem
          selected={state.tool === 'eraser'}
          onClick={() => {
            state.dispatch({
              type: 'setTool',
              payload: {
                value: 'eraser',
              },
            });
          }}
        >
          <ListItemText>Eraser</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem disabled={true}>
          <ListItemText>
            <Typography variant="button" color="text.secondary">
              Stroke Color
            </Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem
          selected={state.strokeColor === 'black'}
          onClick={() => {
            state.dispatch({
              type: 'setStrokeColor',
              payload: {
                value: 'black',
              },
            });
          }}
        >
          <ListItemText>Black</ListItemText>
        </MenuItem>
        <MenuItem
          selected={state.strokeColor === 'blue'}
          onClick={() => {
            state.dispatch({
              type: 'setStrokeColor',
              payload: {
                value: 'blue',
              },
            });
          }}
        >
          <ListItemText>Blue</ListItemText>
        </MenuItem>
        <MenuItem
          selected={state.strokeColor === 'green'}
          onClick={() => {
            state.dispatch({
              type: 'setStrokeColor',
              payload: {
                value: 'green',
              },
            });
          }}
        >
          <ListItemText>Green</ListItemText>
        </MenuItem>
        <MenuItem
          selected={state.strokeColor === 'orange'}
          onClick={() => {
            state.dispatch({
              type: 'setStrokeColor',
              payload: {
                value: 'orange',
              },
            });
          }}
        >
          <ListItemText>Orange</ListItemText>
        </MenuItem>
        <MenuItem
          selected={state.strokeColor === 'red'}
          onClick={() => {
            state.dispatch({
              type: 'setStrokeColor',
              payload: {
                value: 'red',
              },
            });
          }}
        >
          <ListItemText>Red</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem disabled={true}>
          <ListItemText>
            <Typography variant="button" color="text.secondary">
              Stroke Size
            </Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem
          selected={state.strokeSize === 1}
          onClick={() => {
            state.dispatch({
              type: 'setStrokeSize',
              payload: {
                value: 1,
              },
            });
          }}
        >
          <ListItemText>1</ListItemText>
        </MenuItem>
        <MenuItem
          selected={state.strokeSize === 2}
          onClick={() => {
            state.dispatch({
              type: 'setStrokeSize',
              payload: {
                value: 2,
              },
            });
          }}
        >
          <ListItemText>2</ListItemText>
        </MenuItem>
        <MenuItem
          selected={state.strokeSize === 3}
          onClick={() => {
            state.dispatch({
              type: 'setStrokeSize',
              payload: {
                value: 3,
              },
            });
          }}
        >
          <ListItemText>3</ListItemText>
        </MenuItem>
        <MenuItem
          selected={state.strokeSize === 4}
          onClick={() => {
            state.dispatch({
              type: 'setStrokeSize',
              payload: {
                value: 4,
              },
            });
          }}
        >
          <ListItemText>4</ListItemText>
        </MenuItem>
        <MenuItem
          selected={state.strokeSize === 5}
          onClick={() => {
            state.dispatch({
              type: 'setStrokeSize',
              payload: {
                value: 5,
              },
            });
          }}
        >
          <ListItemText>5</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

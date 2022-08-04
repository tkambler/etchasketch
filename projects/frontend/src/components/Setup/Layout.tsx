import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import Paper from '@mui/material/Paper';

function Sidebar() {
  return (
    <Paper variant="outlined">
      <List dense>
      <ListItemButton
          onClick={(event) => {
            return null;
          }}
        >
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Publishers" />
        </ListItemButton>
        <ListItemButton
          onClick={(event) => {
            return null;
          }}
        >
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Titles" />
        </ListItemButton>
        <ListItemButton
          onClick={(event) => {
            return null;
          }}
        >
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Sales" />
        </ListItemButton>
      </List>
    </Paper>
  );
}

export function withLayout(Component) {
  return (props) => (
    <Grid container spacing={2} style={{ height: '100%' }}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid
        item
        xs={10}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Component {...props} />
      </Grid>
    </Grid>
  );
}

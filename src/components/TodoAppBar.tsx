import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export interface TodoAppBarProps {
  onNewTodoRequest: () => void;
}

export default function TodoAppBar(props: TodoAppBarProps) {
  const { onNewTodoRequest } = props;
  const classes = useStyles();

  const newTodoRequest = () => {
    onNewTodoRequest();
  };
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Todos
        </Typography>
        
        <Button variant="contained" color="primary" onClick={() => newTodoRequest()}>
          New Todo
        </Button>
      </Toolbar>
    </AppBar>
  );
}

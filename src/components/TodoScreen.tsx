import React from 'react';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TodoAppBar } from './TodoAppBar';

export interface TodoScreenProps {

}

export function TodoScreen(props: TodoScreenProps) {
  return (
    <Container>
      <TodoAppBar />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          Todo List
        </Grid>
        <Grid item xs={9}>
          <Paper>
            Todo Details
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

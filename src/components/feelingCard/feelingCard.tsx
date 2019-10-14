import React, { Component } from 'react';
import { Grid, withStyles, Typography, Paper, WithStyles } from '@material-ui/core';

// custom imports
import styles from './feelingCard.styles';
import IEntry from '../interfaces/IEntry';

interface IProps extends WithStyles<typeof styles> {
  entry: IEntry;
}
interface IState {}

class FeelingCard extends Component<IProps, IState> {
  render = () => {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} sm={2}>
          <Paper className={this.props.classes.paper}>
            <Typography
              variant="caption"
              display="block"
              className={this.props.classes.dateCaption}
            >
              {this.props.entry.time.format('h:mm a')}
            </Typography>
            <Typography variant="h5" component="h3" className={this.props.classes.dayHeader}>
              {this.props.entry.time.format('dd')}
            </Typography>
            <Typography
              variant="caption"
              display="block"
              className={this.props.classes.dateCaption}
            >
              {this.props.entry.time.format('MMM DD')}
            </Typography>
            <Typography
              variant="caption"
              display="block"
              className={this.props.classes.dateCaption}
            >
              {this.props.entry.time.format('YYYY')}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Paper className={this.props.classes.paper}>
            <Typography variant="body1">{this.props.entry.feeling}</Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  };
}

export default withStyles(styles)(FeelingCard);

import React, { Component } from 'react';
import moment from 'moment';
import uuid from 'uuid';

// mui imports
import { TextField, IconButton, Grid } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
// custom imports
import IEntry from '../interfaces/IEntry';
import Styles from './smartButton.styles';

interface IProps extends WithStyles<typeof Styles> {
  onEntryChange(entry: IEntry): void;
}
interface IState {
  labelText: string;
  captionText: string;
  entry: IEntry;
}

class SmartButton extends Component<IProps, IState> {
  dateFormat: string = 'dddd, MMMM Do YYYY, h:mm:ss a';

  constructor(props: IProps) {
    super(props);
    this.state = {
      entry: { id: uuid.v4(), time: moment(), feeling: '' },
      labelText: this.determineLabel(),
      captionText: this.determineCaption()
    };
  }

  handleClick = () => {
    if (this.state.entry.feeling === '') return;
    this.props.onEntryChange(this.state.entry);
    this.setState({
      entry: { id: uuid.v4(), time: moment(), feeling: '' }
    });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEntry: IEntry = Object.assign({}, this.state.entry);
    newEntry.feeling = e.currentTarget.value;
    this.setState({ entry: newEntry });
  };

  determineLabel = (): string => {
    const hour = moment().hour();
    const label = 'Enter how you feel this ';
    const timeOfDay = hour < 12 ? 'morning' : hour >= 12 && hour < 17 ? 'afternoon' : 'evening';
    return label + timeOfDay;
  };

  determineCaption = (): string => {
    const hour = moment().hour();
    const label = 'good ';
    const timeOfDay = hour < 12 ? 'morning' : hour >= 12 && hour < 17 ? 'afternoon' : 'evening';
    return label + timeOfDay;
  };

  render = () => {
    const state = this.state;
    return (
      <Grid container>
        <Grid item xs={11}>
          <TextField
          fullWidth
            placeholder={state.labelText}
            label={state.captionText}
            id="text-input"
            onChange={this.handleChange}
            value={state.entry.feeling}
            className={this.props.classes.input}
          />
          </Grid>
          <Grid item xs={1}>
          <IconButton className={this.props.classes.iconButton} onClick={this.handleClick}>
            <AddCircleIcon />
          </IconButton>
        </Grid>
      </Grid>
    );
  };
}

export default withStyles(Styles)(SmartButton);

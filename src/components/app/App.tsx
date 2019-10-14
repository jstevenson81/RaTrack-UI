// react imports
import React, { Component } from 'react';

// material ui imports
import { withStyles, WithStyles, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

// custom imports
import SmartButton from '../smartButton/smartButton';
import IEntry from '../interfaces/IEntry';
import FeelingCard from '../feelingCard/feelingCard';

// css and fonts
import 'typeface-roboto';
import styles from './app.styles';
import CustomDarkTheme from '../../theme/customDarkTheme';

interface IProps extends WithStyles<typeof styles> {}
interface IState {
  entries: Array<IEntry>;
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      entries: []
    };
  }

  handleChange = (entry: IEntry) => {
    const copy = [...this.state.entries];
    var found = copy.find(item => item.id === entry.id);
    if (found) {
      const filtered = copy.filter(item => item.id === entry.id);
      this.setState({ entries: filtered });
    } else {
      this.setState(prev => ({ entries: [...prev.entries, entry] }));
    }
  };

  render() {
    //const state = this.state;
    return (
      <MuiThemeProvider theme={CustomDarkTheme}>
        <CssBaseline />
        <div className={this.props.classes.topDiv}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <SmartButton onEntryChange={this.handleChange}></SmartButton>
            </Grid>
            {this.state.entries.map(entry => {
              return (
                <Grid item xs={12} md={6} key={entry.id}>
                  <FeelingCard entry={entry}></FeelingCard>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);

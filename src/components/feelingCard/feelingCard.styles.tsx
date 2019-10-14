import { createStyles } from '@material-ui/core';
import CustomDarkTheme from '../../theme/customDarkTheme';

const styles = () =>
  createStyles({
    root: {
      marginTop: 10
    },
    paper: {
      padding: CustomDarkTheme.spacing(2),
      height: '100%'
    },
    dayHeader: {
      textTransform: 'uppercase',
      textAlign: 'center'
    },
    dateCaption: {
      textTransform: 'uppercase',
      textAlign: 'center',
      fontSize: CustomDarkTheme.typography.fontSize - 4
    }
  });

export default styles;

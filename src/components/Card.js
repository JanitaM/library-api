import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SimplePopover from './SimplePopover';

const useStyles = makeStyles({
  root: {
    maxWidth: '80%',
    margin: '1rem auto',
    border: '1px solid #ccc',
    textAlign: 'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
});

export default function SimpleCard({ book, setBooks }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {book.title}
        </Typography>
        {book.authors[0] ?
          <Typography className={classes.pos} color="textSecondary">
            Author: {book.authors[0].name}
          </Typography> :
          <></>
        }
        <Typography variant="body2" component="p">
          Editions: {book.edition_count}
        </Typography>
      </CardContent>
      <CardActions>
        <SimplePopover book={book}></SimplePopover>
      </CardActions>
    </Card>
  );
}
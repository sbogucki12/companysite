import React from 'react';
import Button from '@material-ui/core/Button';
import background_black_blue_gold_verticle_stripes from './backgroundImages/black_blue_gold_verticle_stripes.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      backgroundImage: background_black_blue_gold_verticle_stripes,
      width: '100vw', 
      height: '100vh'   
    },
  });
function NewStyleHome() {
    const classes = useStyles();

	return (
		<div className={classes.root}>
			<Button variant="contained" color="primary">
				Hello World
			</Button>
		</div>
	);
}

export default NewStyleHome;

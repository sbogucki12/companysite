import React from 'react';
import Button from '@material-ui/core/Button';
import background_black_blue_gold_verticle_stripes from './backgroundImages/black_blue_gold_verticle_stripes.jpg';
import { makeStyles, styled } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		position: `relative`,
		height: `100vh`,
		width: `100vw`,
		display: `flex`,
		alignItems: `center`,
		justifyContent: `center`,
		'&::before': {
			content: `""`,
			backgroundImage: `url(${background_black_blue_gold_verticle_stripes})`,
			backgroundSize: `cover`,
			position: `absolute`,
			top: `0px`,
			right: `0px`,
			bottom: `0px`,
			left: `0px`,
			opacity: `0.4`,
		},
	},
});

function NewStyleHome() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Button variant="outlined" color="secondary">
				Hello World
			</Button>
		</div>
	);
}

export default NewStyleHome;

const DialogMain = (props) => {
	return (
		<div
			onClick={(e) => {
				props.clickAwaySetDialog(e);
			}}
			id="dialogContainer"
		>
			<div onClick={(e) => e.stopPropagation()} id="dialogBox">
				<h1>{props.label}</h1>
			</div>
		</div>
	);
};

export default DialogMain;

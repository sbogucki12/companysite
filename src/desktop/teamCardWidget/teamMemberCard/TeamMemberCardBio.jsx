function TeamMemberCardBio(props) {
	return (
		<div className="teamCardBioContainer">
			<div className="teamMemberCardBioContainer">
				<div onClick={() => props.setShowBio(false)} className="teamMemberCardBioExit">
					<div>&#x274C;</div>
				</div>
				<div className="teamMemberCardBio">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget maximus ligula. Curabitur
					facilisis vestibulum sapien, eget lobortis purus. Sed dignissim accumsan neque, eget luctus metus
					finibus ut. Sed viverra vehicula velit vel mattis. Maecenas pellentesque tincidunt elit, id mattis
					tortor lacinia id. Curabitur
				</div>
			</div>
		</div>
	);
}

export default TeamMemberCardBio;

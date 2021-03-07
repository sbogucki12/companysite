import './teamMemberCard.css';
import GenericProfileImage from './ProfilePlaceholderSuit.png';
import TeamMemberCardBio from './TeamMemberCardBio';
import { useState } from 'react';

function TeamMemberCard() {
	const [showBio, setShowBio] = useState(true);

	return (
		<div id="teamMemberCardContainer">
			<div id="teamMemberNameTitleContainer" onClick={() => setShowBio(true)}>
				<div>Name</div>
				<div>Title</div>
			</div>
			{showBio ? (
				<TeamMemberCardBio setShowBio={setShowBio} />
			) : (
				<div id="teamMemberCardImage">
					<img src={GenericProfileImage} style={{ maxHeight: '150px' }} onClick={() => setShowBio(true)} />
				</div>
			)}
		</div>
	);
}

export default TeamMemberCard;

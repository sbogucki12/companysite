import './teamMemberCard.css';
import GenericProfileImage from './ProfilePlaceholderSuit.png';
import TeamMemberCardBio from './TeamMemberCardBio';
import { useState } from 'react';

function TeamMemberCard() {
	const [showBio, setShowBio] = useState(false);

	return (
		<div className="teamMemberCardContainer">
			<div className="teamMemberNameTitleContainer" onClick={() => setShowBio(true)}>
				<div>Name</div>
				<div>Title</div>
			</div>
			{showBio ? (
				<TeamMemberCardBio setShowBio={setShowBio} />
			) : (
				<div className="teamMemberCardImageContainer">
					<img src={GenericProfileImage} height='150px' width='90%' onClick={() => setShowBio(true)} alt="Team Member"/>
				</div>
			)}
		</div>
	);
}

export default TeamMemberCard;

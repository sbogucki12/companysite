import TeamMemberCard from './teamMemberCard/TeamMemberCard';
import './teamCardWidget.css';

function TeamCardWidget() {
	return (
		<div id="teamCardWidget">
			<div id="meetOurTeamTitle">
				<div>Our Leadership Team</div>
			</div>
			<div id="teamMemberCardRow">
				<TeamMemberCard />
				<TeamMemberCard />
				<TeamMemberCard />
			</div>
		</div>
	);
}

export default TeamCardWidget;

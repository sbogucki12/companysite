import './portfolio.css';

function Portfolio() {
	return (
		<div id="portfolioContainer">
			<div id='portfolioTitleContainer'>
				<div>Experience</div>
			</div>
			<div id="portfolioProjectContainer">
				<div className="projectCardContainer">
					<div className='projectCardContentContainer'>
                    <div>
                            Project Title
                        </div>
                        <div>
                            Image
                        </div>
                        <div>
                            Project Summary
                        </div>
                    </div>
				</div>
				<div className="projectCardContainer" id='projectCardMiddleContainer'>
					<div className='projectCardContentContainer'>
                    <div>
                            Project Title
                        </div>
                        <div>
                            Image
                        </div>
                        <div>
                            Project Summary
                        </div>
                    </div>
				</div>
				<div className="projectCardContainer">
					<div className='projectCardContentContainer'>
                    <div>
                            Project Title
                        </div>
                        <div>
                            Image
                        </div>
                        <div>
                            Project Summary
                        </div>
                    </div>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;

import React from 'react';
import FooterMain from './footer/FooterMain';
import TeamMemberCard from './teamMemberCard/TeamMemberCard';
import '../app.css';
import './desktopBase.css';

function DesktopBase() {
    return (
        <div>
            <main id='main'>
                <TeamMemberCard />
            </main>
            <footer id='footer'>
                <FooterMain />
            </footer>
        </div>
    )
}

export default DesktopBase;

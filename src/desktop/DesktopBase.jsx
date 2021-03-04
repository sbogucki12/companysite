import React from 'react';
import FooterMain from './footer/FooterMain';
import '../app.css';
import './desktopBase.css';

function DesktopBase() {
    return (
        <div>
            <main>
                Desktop!
            </main>
            <footer id='footer'>
                <FooterMain />
            </footer>
        </div>
    )
}

export default DesktopBase;

import './footerMain.css';
import FooterContactMenu from './footerContactMenu/FooterContactMenu';
import {useState} from 'react';

let footerContactMenu = null; 

function FooterMain() {
    const [showFooterContactMenu, setShowFooterContactMenu] = useState(true);
    
    return (
        <div id='footerMainContainer'> 
            <div>
                Footer!
            </div>
            
                <div>
                    { showFooterContactMenu ? <div id='footerContactMenu'><FooterContactMenu setShowFooterContactMenu={setShowFooterContactMenu}  /> </div>: footerContactMenu }
                </div>
            
            {showFooterContactMenu ? null :
            <div id='footerShowContactMenuButton'>
                <div onClick={() => setShowFooterContactMenu(true)}>
                    Contact
                </div>
            </div>}
        </div>
    )
}

export default FooterMain;

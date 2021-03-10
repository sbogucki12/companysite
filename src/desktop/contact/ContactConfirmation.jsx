import './contact.css';
import { useState } from 'react';

function ContactConfirmation() {
    const [showSent, setShowSent] = useState(true);
    
    setTimeout(() => {
        setShowSent(false)
    }, 2000);

    return (
        <div>
            {showSent ? <h1>Sending...</h1> : <h1>Sent!</h1>}
        </div>
    )
};

export default ContactConfirmation;

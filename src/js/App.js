import React from 'react';

export default function App(){
    const title = "Hellow world aaaaabbbb";
    const enchancedTitle = title + ' - React app!';

    const sendNotification = () => {
        alert('hellow world!!!')
    }

    return (
        <div>
            <h1>{enchancedTitle}</h1>
            <button onClick={sendNotification}>Send notification</button>
        </div>

    )
}

import React from 'react'
import Fire from "../img/fire.png"

const Blank = () => {
    return (
        <div className="blank">
            <div className="no_message">
                <img src={Fire} alt="" style={{ borderRadius: '50%' }} />
                <div className="welcome">Welcome to Fire Chat</div>
            </div>
        </div>)
}

export default Blank
import React from 'react'

import './SidebarChannel.css'

const SidebarChannel = ({ id, channel }) => {
    return(
        <div className="sidebar-channel">
            <h4>
                <span className='sidebar-channel-hash'>#</span>Youtube
            </h4>
        </div>
    )
}

export default SidebarChannel;
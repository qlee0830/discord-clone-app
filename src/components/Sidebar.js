import React from 'react'

import SidebarChannel from './SidebarChannel'

import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <h1>Sidebar</h1>

            <div className='sidebar-top'>
                <h1>Clever Programmer</h1>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar-channels">
                <div className="sidebar-channels-header">
                    <div className="sidebar-header">
                        <ExpandMoreIcon />
                        <h4>Text channel</h4>
                    </div>

                    <AddIcon className='sidebar-add-channel' />
                </div>

                <div className="sidebar-channels-list">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>

            <div className="sidebar-voice">
                <SignalCellularAltIcon
                    className='sidebar-voice-icon'
                    fontSize='large' />
            </div>
 
        </div>
    )
}

export default Sidebar;
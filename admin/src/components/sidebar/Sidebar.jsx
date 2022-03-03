import { Apps, Dashboard, Email, Groups, LineStyle, ManageAccounts, Message, Paid, QueryStats, Report, TableView, Timeline, TrendingUp } from "@mui/icons-material"
import { Link } from "react-router-dom"
import "./sidebar.css"


import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { Fragment, useState } from "react";
import WidgetsIcon from '@mui/icons-material/Widgets';

export default function Sidebar() {



    const [state, setState] = useState({
       
        left: false,
     
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
           
           <div className="sidebarMenu">
                    <div className="sidebarListTitleWrapper">
                        <h3 className="sidebarListTitle">Dashboard</h3>
                        <div className="sidebarListTitleUnderline"></div>
                    </div>
                    <ul className="sidebarList">
                        <Link to="/" className="link" >
                            <li className="sidebarListItem" >
                                <Dashboard className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItemDisabled"> 
                            <TableView className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItemDisabled">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarListTitleWrapper">
                        <h3 className="sidebarListTitle">Manage</h3>
                        <div className="sidebarListTitleUnderline"></div>
                    </div>
                    <ul className="sidebarList">

                      
                            <li className="sidebarListItemDisabled">
                                <Groups className="sidebarIcon" />
                                Users
                            </li>
                     
                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <Apps className="sidebarIcon" />
                                Prodcuts
                            </li>
                        </Link>
                        <li className="sidebarListItemDisabled">
                            <Paid className="sidebarIcon" />
                            Transactions
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarListTitleWrapper">
                        <h3 className="sidebarListTitle">Notfications</h3>
                        <div className="sidebarListTitleUnderline"></div>
                    </div>
                    <ul className="sidebarList">
                        <li className="sidebarListItemDisabled">
                            <Email className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarListItemDisabled">
                            <Report className="sidebarIcon" />
                            Reports
                        </li>
                        <li className="sidebarListItemDisabled">
                            <Message className="sidebarIcon" />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarListTitleWrapper">
                        <h3 className="sidebarListTitle">Staff</h3>
                        <div className="sidebarListTitleUnderline"></div>
                    </div>
                    <ul className="sidebarList">
                        <li className="sidebarListItemDisabled">
                            <ManageAccounts className="sidebarIcon" />
                            Managment
                        </li>
                    </ul>
                </div>
           
        </Box>
    );







    return (
        <div className="sidebar">
            <div className="sidebarResponsiveLarge">
                <div className="sidebarMenu">
                    <div className="sidebarListTitleWrapper">
                        <h3 className="sidebarListTitle">Dashboard</h3>
                        <div className="sidebarListTitleUnderline"></div>
                    </div>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem">
                                <Dashboard className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItemDisabled">
                            <TableView className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItemDisabled">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarListTitleWrapper">
                        <h3 className="sidebarListTitle">Manage</h3>
                        <div className="sidebarListTitleUnderline"></div>
                    </div>
                    <ul className="sidebarList">

                       
                            <li className="sidebarListItemDisabled">
                                <Groups className="sidebarIcon" />
                                Users
                            </li>
                      
                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <Apps className="sidebarIcon" />
                                Prodcuts
                            </li>
                        </Link>
                        <li className="sidebarListItemDisabled">
                            <Paid className="sidebarIcon" />
                            Transactions
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarListTitleWrapper">
                        <h3 className="sidebarListTitle">Notfications</h3>
                        <div className="sidebarListTitleUnderline"></div>
                    </div>
                    <ul className="sidebarList">
                        <li className="sidebarListItemDisabled">
                            <Email className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarListItemDisabled">
                            <Report className="sidebarIcon" />
                            Reports
                        </li>
                        <li className="sidebarListItemDisabled">
                            <Message className="sidebarIcon" />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarListTitleWrapper">
                        <h3 className="sidebarListTitle">Staff</h3>
                        <div className="sidebarListTitleUnderline"></div>
                    </div>
                    <ul className="sidebarList">
                        <li className="sidebarListItemDisabled">
                            <ManageAccounts className="sidebarIcon" />
                            Managment
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sidebarResponsiveSmall">
            <div className="sidebarIconMenuResponsive">
                            <WidgetsIcon fontSize="large" onClick={toggleDrawer('left', true)}/>
                            </div>
                <div>
                    {['left'].map((anchor) => (
                        <Fragment key={anchor}>

                         
                            <SwipeableDrawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                                onOpen={toggleDrawer(anchor, true)}
                            >
                                {list(anchor)}
                            </SwipeableDrawer>
                        </Fragment>
                    ))}
                </div>

            </div>
        </div>
    )
}

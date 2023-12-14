import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div style={{display: 'flex', height: '91.7vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#F1F2F7">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none menu">
            Menu
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="sidelink" icon="chart-line">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="sidelink" icon="columns">Projects</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="sidelink" icon="user">Technicians</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="sidelink" icon="star">Customer Review</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="sidelink" icon="exclamation-circle">Help</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
              color: 'black',
            }}
          >
           <AccountCircleIcon/> 
            Username
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
import React, { useEffect, useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {
    Switch,
    Route,
    Redirect,
    withRouter
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'

import AdminDashboard from '../pages/admin/dashboard';
import { CustomSwitch } from '../components/common/switch';
import { connectAuth } from '../common/redux/connects';
import { isDarkTheme, toggleDarkTheme } from '../common/utils/theme';

function AdminLayout({ match, logoutUserAction }) {
    const [darkTheme, setDarkTheme] = useState(isDarkTheme());

    return (<div className='vh-100 vw-100'>
        <Navbar bg='dark' variant='dark' expand='md'>
            <Navbar.Brand>Welcome to Admin Page</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
                <Nav className='ml-auto mr-3'>
                    <div className='d-flex'>
                        <CustomSwitch className='my-auto mr-1' value={darkTheme} onChange={e => toggleDarkTheme(e.target.checked)} />
                        <Nav.Link disabled className='px-0'>Dark Theme</Nav.Link>
                    </div>
                    <NavDropdown alignRight title={<FontAwesomeIcon className='mx-1 my-auto' icon={faUser} size='lg' />}>
                        <NavDropdown.Item disabled>Profile</NavDropdown.Item>
                        <NavDropdown.Item disabled>Magazines</NavDropdown.Item>
                        <NavDropdown.Item disabled>Notifications</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={logoutUserAction}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Switch>
            <Route exact path={`${match.url}/dashboard`} component={AdminDashboard} />
            <Route exact path={`${match.url}/users`}>
                <div>User Management</div>
            </Route>
            <Route path='/' >
                <Redirect to={`${match.url}/dashboard`} />
            </Route>
        </Switch>
    </div>);
};

export default withRouter(connectAuth(AdminLayout));
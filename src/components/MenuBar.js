import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function MenuBar() {
    const [links] = useState([
        { title: 'sobre', page: '/' },
        { title: 'portfolio', page: '/projects' },
    ]);

    return (
        <Navbar expand="lg" className="justify-content-center">
            <Nav className="pt-5" defaultActiveKey="sobre">
                {links.map(link => (
                    <li key={link.title} className="nav-item">
                        <Link className="nav-link" to={link.page}>
                            <div>{link.title}</div>
                        </Link>
                    </li>
                ))}
            </Nav>
        </Navbar>
    );
}
import React, { useState } from 'react';
import {
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';


export default function Menu(props) {
    const [activos, setActivos] = useState(["active", "", "", ""]);
    return (
        <Nav tabs>
            <NavItem>
                <NavLink>
                    <Link to='/'>Home</Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink >
                    <Link to='/Reservas'>Reservas</Link>
                </NavLink>

            </NavItem>
            <NavItem>
                <NavLink>
                    <Link to='/Administracion'>Administración</Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink>
                    <Link to='/Usuario'>Usuario</Link>
                </NavLink>
            </NavItem>
        </Nav>
    );
}
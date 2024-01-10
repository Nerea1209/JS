import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavLink,
    Button,
} from 'reactstrap';

function Menu(props) {
    let colorUno = 'secondary'
    let colorDos = 'secondary'
    let colorTres = 'secondary'
    switch (props.menuItem) {
        case 'UNO':
            colorUno = 'primary'
            break;
        case 'DOS':
            colorDos = 'primary'
            break;
        case 'TRES':
            colorTres = 'primary'
            break;
    }
    return (
        <div>
            <Navbar color="faded" light>
                <NavbarBrand href="/">MYFPSCHOOL</NavbarBrand>

                <NavLink>
                    <Button color={colorUno} onClick={() => props.onClick("UNO")}>UNO</Button>{" "}
                    <Button color={colorDos} onClick={() => props.onClick("DOS")}>DOS</Button>{" "}
                    <Button color={colorTres} onClick={() => props.onClick("TRES")}>TRES</Button>
                </NavLink>
            </Navbar>
        </div>
    );
}

export default Menu;
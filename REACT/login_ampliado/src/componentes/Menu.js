import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavLink,
  Button,
} from 'reactstrap';
import Uno from './Uno';
import Dos from './Dos';
import Tres from './Tres';


export default function Menu(props) {
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
      <Navbar>
        <NavbarBrand href="/">MYFPSCHOOL</NavbarBrand>
        <NavLink>
          <Button color={colorUno} onClick={() => props.changeMenu("UNO")}>UNO</Button>{" "}
          <Button color={colorDos} onClick={() => props.changeMenu("DOS")}>DOS</Button>{" "}
          <Button color={colorTres} onClick={() => props.changeMenu("TRES")}>TRES</Button>
        </NavLink>
      </Navbar>
      {colorUno === "primary" && <Uno value={props.value} setValue={(d) => props.setValue(d)} />}
      {colorDos === "primary" && <Dos value={props.value} setValue={(d) => props.setValue(d)} />}
      {colorTres === "primary" && <Tres value={props.value} setValue={(d) => props.setValue(d)} />}
    </div>
  );
}

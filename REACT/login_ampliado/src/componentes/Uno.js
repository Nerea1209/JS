import React, { useState } from 'react';
import { Row, Col, Card, CardTitle, CardText, Form, FormGroup, Button, Label, Input } from 'reactstrap';

export default function Uno(props) {


  const handleChange = (event) => {
    if (event.target.name == "texto") {
      props.setValue(event.target.value)
    }
  }

  return (
    <div>
      <Input
        name='texto'
        defaultValue={props.value}
        onChange={handleChange}
      />
    </div>
  )
}

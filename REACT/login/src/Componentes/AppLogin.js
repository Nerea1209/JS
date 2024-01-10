import { Card, CardTitle, CardText, Button, Input, Label, Form } from "reactstrap";
import { useState } from "react";


export default function AppLogin(props) {
    const [password,setPassword] = useState('');
    const [user,setUser] = useState('');
    const handleChange = (event) => {
        if (event.target.name === "username") {
            setUser(event.target.value)
        }
        if (event.target.name === "password") {
            setPassword(event.target.value)
        }
    }
    return (
        <Card
            body
            className="my-2"
            style={{
                width: '18rem'
            }}
        >
            <CardTitle tag="h5" style={{ textAlign: "center" }}>
                Log in
            </CardTitle>
            <CardText>
                <Form>
                    <Label
                        for="username"
                    >
                        Username
                    </Label>
                    <Input
                        id="username"
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                    />
                    <Label
                        for="password"
                    >
                        Password
                    </Label>
                    <Input
                        id="password"
                        name="password"
                        placeholder="Password"
                        type="password"
                        onChange={handleChange}
                    />
                </Form>
            </CardText>
            <Button color="primary" onClick={() => props.onClick(user, password)}>
                <strong>Log in</strong>
            </Button>
            {props.error && <CardText className="text-danger">{props.error}</CardText>}
        </Card>
    );
} 
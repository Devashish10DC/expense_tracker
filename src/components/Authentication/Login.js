import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";
import styles from "./Login.module.css"

const Login = () => {
  const [Error, SetError] = useState("");
  const [Loading, setLoading] = useState(false);
  const emailRef = useRef();
  const PasswordRef = useRef();
  const history = useHistory();

  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      SetError("");
      setLoading(true);
      await login(emailRef.current.value, PasswordRef.current.value);
      history.push("/");
    } catch (err) {
      SetError("I'm Afraid! " + err.message);
    }
    setLoading(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Log In</h1>
        {Error && (
          <Alert variant="danger" className="h-2 ">
            {Error}
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3  ">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>

          <Form.Group className="mb-3 " Id="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={PasswordRef} required />
          </Form.Group>

          <Button disabled={Loading} className="w-100" type="submit">
            Login
          </Button>

          <Card.Body>
            <div className="w-100 text-center mt-2">
              Forgot your Password? <Link to="/reset">Reset</Link>
            </div>
            <div className="w-100 text-center mt-2">
              Need An Account ? <Link to="/signup">Signup</Link>
            </div>{" "}
          </Card.Body>
        </Form>
      </div>
    </div>
  );
};

export default Login;

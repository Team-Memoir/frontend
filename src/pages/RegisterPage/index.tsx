import React, { ChangeEvent, useState, FormEvent } from "react";
import Container from "@material-ui/core/Container";
import { Button, FormControl, TextField, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

type User = {
  email?: string;
  password?: string;
};

const RegisterPage = () => {
  const [user, setUser] = useState<User>({ email: "", password: "" });

  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUser({ ...user, [name]: value });
    console.log(user);
    return false;
  };

  const handelGoogle = () => {
    console.log("register with google");
  };
  const handelRegister = () => {
    console.log("Register");
  };
  const handelLogin = () => {
    console.log("Login");
  };

  const handleSubmit = (e: FormEvent<any>) => {
    e.preventDefault();
  };

  const styles = useStyles();

  return (
    <Container className={styles.root}>
      <Typography variant="h4" component="h4" className={styles.title}>
        Memoir
      </Typography>
      <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
        <FormControl fullWidth>
          <TextField
            name="email"
            id="email"
            value={user.email}
            type="text"
            onChange={handelChange}
            label="Email"
            fullWidth
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            name="password"
            id="password"
            value={user.password}
            type="password"
            label="Password"
            onChange={handelChange}
            fullWidth
          />
        </FormControl>
        <FormControl className={styles.googleBtn}>
          <Button color="primary" variant="contained" onClick={handelGoogle}>
            Continue with Google
          </Button>
        </FormControl>
        <FormControl className={styles.btnGroup}>
          <Button color="primary" variant="contained" onClick={handelLogin}>
            Login
          </Button>
          <Button color="primary" variant="contained" onClick={handelRegister}>
            Register
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default RegisterPage;

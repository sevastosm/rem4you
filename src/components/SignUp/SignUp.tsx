import * as React from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

import { registerUser } from "./helpers";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userFirstName, setUserFirstName] = React.useState("");
  const [userLastName, setUserLastName] = React.useState("");


  const [password, setPassWord] = React.useState("");
  const [passwordConfirm, setPassWordConfirm] = React.useState("");

  const [message, setMessage] = React.useState(false);

  const handleEmail = (e) => {
    setMessage(false);
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handleUserName = (e) => {
    setMessage(false);
    console.log(e.target.value);
    setUserName(e.target.value);
  };
  const handleUserFirstName = (e) => {
    setMessage(false);
    console.log(e.target.value);
    setUserFirstName(e.target.value);
  }
  const handleUserLastName = (e) => {
    setMessage(false);
    console.log(e.target.value);
    setUserLastName(e.target.value);
  }
  
  const handlePassword = (e) => {
    setMessage(false);

    console.log(e.target.value);
    setPassWord(e.target.value);
  };
  const handlePasswordConfirm = (e) => {
    setMessage(false);

    console.log(e.target.value);
    setPassWordConfirm(e.target.value);
  };
  // let history = useHistory();
  const handleSighUp = (e) => {
    e.preventDefault();
    registerUser({
      email: email,
      username: userName,
      firstname:userFirstName,
      lastname:userFirstName,
      password: password,
      confirmPassword: passwordConfirm,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h3">
          Rem-4U
        </Typography>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form id="form1" className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            defaultValue={email}
            onChange={handleEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoComplete=""
            autoFocus
            // defaultValue={email}
            onChange={handleUserName}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete=""
            autoFocus
            // defaultValue={''}
            onChange={handleUserFirstName}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="last Name"
            name="lastName"
            autoComplete=""
            autoFocus
            // defaultValue={''}
            onChange={handleUserLastName}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            defaultValue={password}
            autoComplete=""
            onChange={handlePassword}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Confirm Password"
            type="password"
            id="passwordconfirm"
            // defaultValue={password}
            autoComplete=""
            onChange={handlePasswordConfirm}
          />
          {message && <span>Pasword not match !!</span>}
          <br />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSighUp}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/">Back to home</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default SignUp;

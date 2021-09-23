import React, {useContext} from 'react';
import { Button, Container, Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import {Context} from '../index';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";




const Login = () => {
  const {auth} = useContext(Context);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const {user} = await signInWithPopup(auth, provider);
    console.log(user);
  };

  return (
    <Container>
      <Grid container
            style={{height: window.innerHeight - 50}}
            alignItems={"center"}
            justifyContent={"center"}
            >
              <Grid style={{width:400, background: 'lightgray'}}
                container
                  alignItems={"center"}
                  direction={"column"}
              >
                <Box p={5}>
                  <Button onClick={login} variant={"outlined"}>Войти с помощью Google</Button>
                </Box>
              </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
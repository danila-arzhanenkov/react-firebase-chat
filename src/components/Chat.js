import { Button, Container, TextField} from '@material-ui/core';
import React, { useContext, useState } from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";
import { Grid } from '@material-ui/core';
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from './Loader';
import { initializeApp } from "firebase/app";
import { useCollection, collection, addDoc, doc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";




const Chat = () => {
  // const {auth, firestore} = useContext(Context);
  // const [user] = useAuthState(auth);
  // const [value, setValue] = useState('');
  // const [messages, loading] = useCollectionData(
  //   initializeApp.firestore.document('messages').orderBy('createdAt')
  // );

  // const sendMessage = async () => {
  //   initializeApp.firestore.document('messages').add({
  //     uid: user.uid,
  //     displayName: user.displayName,
  //     photoURL: user.photoURL,
  //     text: value,
  //     createdAt: initializeApp.firestore.FieldValue.serverTimestamp()
  //   });
  //   setValue('');
  // };

  // if (loading) {
  //   return <Loader/>
  // }

  return (
    <Container>
      <Grid container
            justifyContent={"center"}
            style={{height: window.innerHeight - 50, marginTop: 20}}>
              <div style={{width: '80%', height:'60vh', border: '1px solid gray', overflowY: 'auto' }}>

              </div>
              <Grid
                  container
                  direction={"column"}
                  alignItems={"flex-end"}
                  style={{width:'80%'}}
                >
                  <TextField
                  fullWidth
                  maxRows={2}
                  variant={"outlined"}
                  // value={value}
                  // onChange={e => setValue(e.target.value)}
                  />
                  <Button
                          // onClick={sendMessage}
                          variant={"outlined"}
                          style={{marginTop: 20}}
                  >Отправить</Button>
                </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;

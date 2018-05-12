import * as functions from 'firebase-functions';
import { config } from './config/config';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Helloworld is working fine !");
});



import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import 'firebase/firestore';
import config from './config';

// Initialize Firebase
const Firebase = initializeApp(config.firebase);

export const auth = getAuth();
export default Firebase;
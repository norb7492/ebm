import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC-7L7ioZBdCSfDHNT-a0J9TVjd1Bb96KY',
  authDomain: 'ebm-backend.firebaseapp.com',
  projectId: 'ebm-backend',
  storageBucket: 'ebm-backend.appspot.com',
  messagingSenderId: '201106369556',
  appId: '1:201106369556:web:8702fbbab37d72102b8b01',
  measurementId: 'G-K4MYR16R88'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);
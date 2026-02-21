import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAR0KYUWkERE_AvPFLm3BED_wkD6AQMXSQ",
    authDomain: "akj-groups-website.firebaseapp.com",
    projectId: "akj-groups-website",
    storageBucket: "akj-groups-website.firebasestorage.app",
    messagingSenderId: "123667776467",
    appId: "1:123667776467:web:56be2fbdc6989e4227e526"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

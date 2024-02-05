import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";


export default class SizeTransaction {
    static firebaseConfig = {
        apiKey: "AIzaSyBwTpeuDlk8R23dwLM5vNNjS2GNvKoD5mc",
        authDomain: "miraclesstyle-1d805.firebaseapp.com",
        databaseURL: "https://miraclesstyle-1d805.firebaseio.com",
        projectId: "miraclesstyle-1d805",
        storageBucket: "miraclesstyle-1d805.appspot.com",
        messagingSenderId: "921887962765",
        appId: "1:921887962765:web:d4d19a6b47f9894d5e54c4",
        measurementId: "G-SQY6SWX7RV"
    };


    static initialize() {
        return initializeApp(this.firebaseConfig);
    }


    static initializeFirestore(){
        return getFirestore(this.initialize());
    }


    static async getProductSize(){
        const db = this.initializeFirestore();
        const productSize = await getDocs(collection(db,"ProdcutSize"));
        return await productSize.docs.map(d=>d.data());
    }
}
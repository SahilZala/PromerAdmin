import { initializeApp } from "firebase/app";
import { getFirestore,setDoc,doc, collection, getDocs } from "firebase/firestore";

export default class CategoryTrasaction {

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


    static createMainCategory(data){ 
        const db = this.initializeFirestore();
        console.log(data);

        return setDoc(doc(db, "MainCategory", data.id), data);
    }

    static getMainCategory(){
        const db = this.initializeFirestore();
        return getDocs(
            collection(db,"MainCategory"));
    }

    static createSubCategory(data){
        const db = this.initializeFirestore();
        console.log(data);
        return setDoc(doc(db, "SubCategory", data.id), data);
    }

    static async getSubCategory() {

        var finalData = [];
        
        const db = this.initializeFirestore();

        const subData = await getDocs(collection(db,"SubCategory"));
        

        const mainData = await this.getMainCategory();

        subData.docs.forEach((val) => {
            let data = {
                subCategory: val.data(),
                mainCategory: mainData.docs.filter((d) => d.data().id === val.data().mainCategory.id )[0].data()
            };

            finalData.push(data);
        });

        return await finalData;
    }


    static async getMainandSubCategory(){
        var finalData = [];
        const db = this.initializeFirestore();
        const subData = await getDocs(collection(db,"SubCategory"));
        const mainData = await this.getMainCategory();

        mainData.docs.forEach((m) => finalData.push({
            mainCategory: m.data(),
            id: m.data().id,
            title: m.data().title,
            subCategory: subData.docs.filter((s) => s.data().mainCategory.id === m.data().id).map((d) => d.data())
        }));


        return await finalData;

    }

}
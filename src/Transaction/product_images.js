import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { ref,uploadBytesResumable,getDownloadURL } from "firebase/storage";

export default class ProductImages{
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
      
    // Initialize Firebase
    
    static initializa(){
        return initializeApp(this.firebaseConfig);
    }
    static initializeStorage()
    {
        let app = this.initializa();
        return getStorage(app);
    }

    static uploadImages(file,articalno,filename){
        
        let storage = this.initializeStorage();
        const storageRef = ref(storage, 'Product/'+articalno+'/'+filename+".png");

        return uploadBytesResumable(storageRef, file);
    }

    static handleUploadTask(uploadTask,setState,state) {
        uploadTask.on("state_changed",
            (snapshot)  => {
              const progress =
                Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

                setState(progress);
            //   setProgresspercent(progress);
                // console.log("  in "+ progress);
            },
            (error) => {
              alert(error);
        },() => {
            getDownloadURL(uploadTask.snapshot.ref).then((val) => {
                console.log(val);
                console.log(state.uploadProgress);
            });
        });
        
    }

}
import { initializeApp } from "firebase/app";
import { deleteObject, getStorage } from "firebase/storage";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import ProductTrasaction from "./firebase/product_transaction";

export default class ProductImages {
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

    static initializa() {
        return initializeApp(this.firebaseConfig);
    }
    static initializeStorage() {
        let app = this.initializa();
        return getStorage(app);
    }

    static deleteImage(id,filename){
        console.log(id+" "+filename);
        let storage = this.initializeStorage();
        let dbref = ref(storage,"Product/"+id+"/"+filename+".png");
        deleteObject(dbref).then(() => {
            console.log("completed");
        }).catch((error) => {
            console.log("error "+error);    
        })
    }

    static uploadImages(file, id, filename, uploadTask, setState, state, index) {
        let storage = this.initializeStorage();
        const storageRef = ref(storage, 'Product/' + id + '/' + filename + ".png");
        uploadBytesResumable(storageRef, file)
            .on("state_changed",
                (snapshot) => {
                    const progress =
                        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setState(progress, index);
                },
                (error) => {
                    alert(error);
                }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then((val) => {
                    console.log(val);
                    console.log(state.uploadProgress);
            });
        });
    }

    

    static uploadImagesFirebaseRecu(files, id, index, setProducImageUrl, imageUrls, onComplete,onError) {
        var title = new Date().valueOf();
        if (files.length === 0) {
            alert("Images was not available");
            onComplete();
            return;
        }
        if (index === files.length) {
            alert("images uploaded");    
            console.log(imageUrls);
            ProductTrasaction.registerImageUrls(imageUrls).then((data) => {
                alert("images url registeration done.");
                onComplete();
            }).catch((err) => {
                onError();
                console.log("" + err)});
            return;
        }

        let storage = this.initializeStorage();
        const storageRef = ref(storage, 'Product/' + id + '/' + title + ".png");

        let uploadTask = uploadBytesResumable(storageRef, files[index]);
        uploadTask.on('state_changed', (snapshot) => {
            // const progress =
            //     Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            
        }, (error) => {
            alert(error);
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then((val) => {
                let data = {
                    "id": ""+id,
                    "title": title,
                    "url": val,
                    "productEntity": {
                        "id": ""+id
                    }
                }

                
                imageUrls.push(data);
                console.log(imageUrls);
                // setProducImageUrl(data);
                this.uploadImagesFirebaseRecu(files, id, index + 1, setProducImageUrl, imageUrls, onComplete,onError);
            });
        });
    }


    // static uploadImagesRecu(files, id, index, setProducImageUrl, imageUrls, onComplete,onError) {
    //     if (files.length === 0) {
    //         alert("Images was not available");
    //         onComplete();
    //         return;
    //     }
    //     if (index === files.length) {
    //         alert("images uploaded");    
    //         console.log(imageUrls);
    //         ProductTransaction.createImageUrl(imageUrls).then((data) => {
    //             alert("images url registeration done.");
    //             onComplete();
    //         }).catch((err) => {
    //             onError();
    //             console.log("" + err)});
    //         return;
    //     }

    //     let storage = this.initializeStorage();
    //     const storageRef = ref(storage, 'Product/' + id + '/' + index + ".png");

    //     let uploadTask = uploadBytesResumable(storageRef, files[index]);
    //     uploadTask.on('state_changed', (snapshot) => {
    //         const progress =
    //             Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    //         console.log(index + " " + progress);
    //     }, (error) => {
    //         alert(error);
    //     }, () => {
    //         getDownloadURL(uploadTask.snapshot.ref).then((val) => {
    //             let data = {
    //                 "title": "" + index,
    //                 "url": val,
    //                 "productEntity": {
    //                     "id": id
    //                 }
    //             }
    //             imageUrls.push(data);
    //             setProducImageUrl(data);
    //             this.uploadImagesRecu(files, id, index + 1, setProducImageUrl, imageUrls, onComplete,onError);
    //         });
    //     });
    // }

}

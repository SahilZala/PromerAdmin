import { initializeApp } from "firebase/app";
import { getFirestore, setDoc,doc, updateDoc, getDocs, collection, deleteDoc  } from "firebase/firestore";
import CategoryTrasaction from "./category_transaction";
import SizeTransaction from "./size_transaction";
// import ProductImages from "../product_images";

export default class ProductTrasaction {
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

    static async createProduct(data)
    {
        const db = this.initializeFirestore();
        
        var finaldata = {
            id: ""+new Date().valueOf(),
            productDetails: {
                articleNumber: data.articalNo,
                title: data.title,
                subTitle: data.subTitle,
                description: data.description,
                moreInfo: data.moreInfo
            },
            productPricing: {
                realPrice: data.realPrice,
                discountPrice: data.discountedPrice
            },
            productVariant: {
                gender: data.gender.title,
                size:  data.productSize.id,
                color: "none",
                mainCategory: data.mainCategory.id,
                subCategory: data.subCategory.id
            },
            productOrganization: {
                brandName: data.brandName,
                seller: data.seller,
                manufacturer: data.manufacturer
            },
            activation: true
        };


        await setDoc(doc(db, "Products", finaldata.id), finaldata);
        return await finaldata;
    }


    static async updateProduct(data)
    {
        const db = this.initializeFirestore();
        
        var finaldata = {
            id: ""+data.id,
            productDetails: {
                articleNumber: data.articalNo,
                title: data.title,
                subTitle: data.subTitle,
                description: data.description,
                moreInfo: data.moreInfo
            },
            productPricing: {
                realPrice: data.realPrice,
                discountPrice: data.discountedPrice
            },
            productVariant: {
                gender: data.gender.title,
                size:  data.productSize.id,
                color: "none",
                mainCategory: data.mainCategory.id,
                subCategory: data.subCategory.id
            },
            productOrganization: {
                brandName: data.brandName,
                seller: data.seller,
                manufacturer: data.manufacturer
            },
            activation: true
        };
        await updateDoc(doc(db, "Products", finaldata.id), finaldata);
        return await finaldata;
    }


    static async registerImageUrls(data){
        const db = this.initializeFirestore();

        let varData = data.map(d => {
            return {id: d.id,
            title: d.title,
            url: d.url};
        });

        return await updateDoc(doc(db, "Products", data[0].id), {"productUrls":varData});
    }


    static async getProductList(){
        let finalData = [];
        const db = this.initializeFirestore();

        let mainCategory = await CategoryTrasaction.getMainandSubCategory();
        let productSize = await SizeTransaction.getProductSize();

        const products = await getDocs(collection(db,"Products"));

        products.docs.forEach((p) => finalData.push({
            productDetails: p.data().productDetails,
            productOrganization: p.data().productOrganization,
            productPricing: p.data().productPricing,
            productImages: p.data().productUrls,
            productVariant: {
                mainCategory : mainCategory.filter((m) => m.id === p.data().productVariant.mainCategory)[0],
                subCategory: mainCategory.filter((m) => m.id === p.data().productVariant.mainCategory)[0].subCategory.filter((s) => s.id === p.data().productVariant.subCategory)[0],
                size: productSize.filter((ps) => ps.id === p.data().productVariant.size)[0],
                color: p.data().productVariant.color,
                gender: p.data().productVariant.gender
            },
            activation: p.data().activation,
            id: p.data().id
        }))

        return await finalData;
    }

    static async deleteProduct(data){
        console.log(data.id);
        const db = this.initializeFirestore();
        return await deleteDoc(doc(db,"Products",data.id));
    }
}
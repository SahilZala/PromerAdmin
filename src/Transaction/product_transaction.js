import ApiUrls from "./api_urls";

export class ProductTransaction {
    static getMainCategory(){
        return fetch(ApiUrls.GET_MAIN_CATEGORY);
    }

    static getSizeCategory(){
        return fetch(ApiUrls.GET_SIZE_CATEGORY);
    }

    static createProduct(data){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "productDetails": {
                    "articleNumber": data.articalNo,
                    "title": data.title,
                    "subTitle": data.subTitle,
                    "description": data.description,
                    "moreInfo": data.moreInfo
                },
                "productPricing": {
                    "realPrice": data.realPrice,
                    "discountPrice": data.discountedPrice
                },
                "productVariant": {
                    "gender": data.gender.title,
                    "size":  data.productSize,
                    "color": data.color,
                    "mainCategory": data.mainCategory,
                    "subCategory": data.subCategory
                },
                "productOrganization": {
                    "brandName": data.brandName,
                    "seller": data.seller,
                    "manufacturer": data.manufacturer
                },
                "activation": true
            })
        };

        return fetch(ApiUrls.CRATE_PRODUCT,requestOptions);
    }
    static getAllProducts(){
        return fetch(ApiUrls.GET_ALL_PRODUCTS);
    }

    static createImageUrl(obj)
    {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        }
        return fetch(ApiUrls.CREATE_IMAGE,requestOptions);
    }

    static deleteProduct(obj){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        }
        return fetch(ApiUrls.DELETE_PRODUCT,requestOptions);
    }
}
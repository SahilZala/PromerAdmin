export default class ProductDto
{
    constructor(title,subTitle,description,moreInfo,realPrice,discountPrice,gender,size,color,mainCategory,subCategory,brandName,seller,manufacturer,activation){
        this.productDetails = {
            "title": title,
            "subTitle": subTitle,
            "description": description,
            "moreInfo": moreInfo
        };

        this.productPricing = {
            "realPrice": realPrice,
            "discountPrice": discountPrice
        };

        this.productVarient = {
            "gender": gender,
            "size": size,
            "color": color,
            "mainCategory": mainCategory,
            "subCategory": subCategory
        };

        this.productOrganization = {
            "brandName": brandName,
            "seller": seller,
            "manufacturer": manufacturer
        } 

        
        this.productData = {
            "productDetails": this.productDetails,
            "productPricing": this.productPricing,
            "productVariant": this.productPricing,
            "productOrganization": this.productOrganization,
            "activation": true
        }
    }
}
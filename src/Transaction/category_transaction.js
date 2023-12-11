import ApiUrls from "./api_urls";

export default class CategoryTransaction {
    static getAllMainCategory(){
        return fetch(ApiUrls.GET_MAIN_CATEGORY);
    }

    static createMainCategory(data){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        return fetch(ApiUrls.CREATE_MAIN_CATEGORY,requestOptions);
    }

    static createSubCategory(data){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        return fetch(ApiUrls.CREATE_SUB_CATEGORY,requestOptions);
    }
}

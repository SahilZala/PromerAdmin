export default class ApiUrls
{
    static HOSTNAME = "http://localhost:8081"
    static ADMIN_URL = "/product_service/admin";
    static GET_MAIN_CATEGORY =  this.HOSTNAME+this.ADMIN_URL+"/get_all/main_category";
    static GET_SIZE_CATEGORY = this.HOSTNAME+this.ADMIN_URL+"/get_all/product_size";
    static CRATE_PRODUCT = this.HOSTNAME+this.ADMIN_URL+"/create/product";
    static GET_ALL_PRODUCTS = this.HOSTNAME+this.ADMIN_URL+"/get_all/product";
}
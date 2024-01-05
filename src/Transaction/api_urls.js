export default class ApiUrls
{
    static HOSTNAME = "https://promer-backend.onrender.com"
    static ADMIN_URL = "/product_service/admin";
    static GET_MAIN_CATEGORY =  this.HOSTNAME+this.ADMIN_URL+"/get_all/main_category";
    static GET_SIZE_CATEGORY = this.HOSTNAME+this.ADMIN_URL+"/get_all/product_size";
    static CRATE_PRODUCT = this.HOSTNAME+this.ADMIN_URL+"/create/product";
    static CREATE_MAIN_CATEGORY = this.HOSTNAME+this.ADMIN_URL+"/create/main_category";
    static CREATE_SUB_CATEGORY = this.HOSTNAME+this.ADMIN_URL+"/create/sub_category";
    static GET_ALL_PRODUCTS = this.HOSTNAME+this.ADMIN_URL+"/get_all/product";
    static CREATE_IMAGE = this.HOSTNAME+this.ADMIN_URL+"/create/product/images/upload";
    static DELETE_PRODUCT = this.HOSTNAME+this.ADMIN_URL+"/delete/product";

}
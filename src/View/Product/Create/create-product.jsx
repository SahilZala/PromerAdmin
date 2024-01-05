import React from 'react';
import './create-product-style.css';
import CustomeSubmitButton from '../../../Components/Buttons/cutome-submit-button';
import CustomeClearButton from '../../../Components/Buttons/custome-clear-button';
import CustomeLabel from '../../../Components/Labels/custome-label';
import CustomeInputBox from '../../../Components/InputBox/custome-input-box';
import CustomeTextareaBox from '../../../Components/InputBox/custome-textarea-box';
// import axios from 'axios';
import CustomeSelector from '../../../Components/Selector/custome-selection';
// import ProductDto from '../../../Dto/product_dto';
import { ProductTransaction } from '../../../Transaction/product_transaction';
import ProductImages from '../../../Transaction/product_images';
import ProgressIndicator from '../../../Components/ProgressIndicator/progress_indicator';
export default class CreateProduct extends React.Component {

    constructor(props) {
        super(props);
        this.mainCategory = []

        this.subCategory = []

        this.state = {
            articalNo: "",
            title: '',
            subTitle: '',
            description: '',
            moreInfo: '',
            realPrice: 0.0,
            discountedPrice: 0.0,
            productImages: [],
            productImageUrls: [],
            uploadProgress: {},
            gender: {
                id: "0",
                title: "MALE"
            },
            mainCategory: {},
            subCategory: {},
            productSize: {},

            genderList: [
                {
                    id: "0",
                    title: "MALE"
                },
                {
                    id: "1",
                    title: "FEMALE"
                }
            ],
            mainCategoryList: [],
            subCategoryList: [],
            productSizeList: [],
            brandName: "",
            seller: "",
            manufacturer: "",

            progress: false,

        }




    }
    componentDidMount() {
        ProductTransaction.getMainCategory()
            .then((data) => data.json().then((value) => this.setState({
                mainCategory: value[0],
                mainCategoryList: value,
                subCategoryList: value[0].subCategory,
                subCategory: value[0].subCategory[0]
            })))
            .catch((error) => console.log(" errr " + error));

        ProductTransaction.getSizeCategory()
            .then((data) => data.json().then((value) => this.setState(
                {
                    productSizeList: value,
                    productSize: value[0]
                })))
            .catch((error) => console.log(" errr " + error));
    }
    render() {
        return (
            <>
            {this.state.progress === true ? <ProgressIndicator title="PRODUCT CREATION IS IN PROGRESS PLEASE DONT PRESSE BACK OR CHANGE TABLE...."/> : <section className='create-product-body'>
                
                <br />
                <form onReset={() => { this.setState({ productImages: [] }) }} onSubmit={this.handleSubmit} className='create-product-form'>
                    <header>
                        <div className='phase1'>
                            <p className='create-product-title'>New Product</p>
                        </div>
                        <div className='phase2'>
                            <CustomeClearButton type='reset' id="clear">Clear</CustomeClearButton>
                            <CustomeSubmitButton type='submit' id="publish">Publish</CustomeSubmitButton>
                        </div>
                    </header>


                    <section style={{ display: 'flex' }}>
                        <section id='phase1'>
                            {this.productDetails()}
                            {this.productPricing()}
                        </section>
                        <section id='phase2'>
                            {this.pickImages()}
                            {this.productVariant()}
                            {this.productOrganization()}


                        </section>
                    </section>

                </form>

            </section>}
            
            </>
        );
    }

    handleSubmit = (event) => { event.preventDefault(); this.checkValidity(); }


    productDetails = () => {
        return <section className='product-section-style'>
            <br />
            <div style={{ display: 'flex' }}>
                <div id='title'>
                    1
                </div>
                <label>
                    Product Details
                </label>
            </div>
            <br />
            <span id='title-box'>
                <CustomeLabel>Artical No.<span style={{ color: 'red' }}>*</span></CustomeLabel>
                <CustomeInputBox onChange={this.onArticalNoChange} type="number" placeholder="Artical No"></CustomeInputBox>
            </span>
            <br />
            <br />
            <span id='title-box'>
                <CustomeLabel>Title<span style={{ color: 'red' }}>*</span></CustomeLabel>
                <CustomeInputBox onChange={this.onTitleChange} type="text" placeholder="title of product"></CustomeInputBox>
            </span>
            <br />
            <br />
            <span id='sub-title-box'>
                <CustomeLabel>Sub Title<span style={{ color: 'red' }}>*</span></CustomeLabel>
                <CustomeInputBox onChange={this.onSubTitleChange} type="text" placeholder="sub title of product"></CustomeInputBox>
            </span>
            <br />
            <br />
            <span id='description-box'>
                <CustomeLabel>Description<span style={{ color: 'red' }}>*</span></CustomeLabel>
                <CustomeTextareaBox onChange={this.onDescriptionChange} type="text" height="100px" placeholder="describe your product in brief"></CustomeTextareaBox>
            </span>
            <br /><br />
            <span id='more-info-box'>
                <CustomeLabel>More Info</CustomeLabel>
                <CustomeTextareaBox onChange={this.onMoreInfoChange} type="text" height="80px" placeholder="you can add more information of product"></CustomeTextareaBox>
            </span>
        </section>
    }

    productPricing = () => {
        return <section className='product-section-style'>
            <br />
            <div style={{ display: 'flex' }}>
                <div id='title'>
                    2
                </div>
                <label>
                    Product Pricing
                </label>
            </div>
            <br />
            <span id='real-price-box'>
                <CustomeLabel>Real Price<span style={{ color: 'red' }}>*</span></CustomeLabel>
                <CustomeInputBox onChange={this.onRealPriceChange} type="number" placeholder="real price"></CustomeInputBox>
            </span>
            <br />
            <br />
            <span id='discounted-price-box'>
                <CustomeLabel>Discounted Price<span style={{ color: 'red' }}>*</span></CustomeLabel>
                <CustomeInputBox onChange={this.onDiscountedPriceChange} type="number" placeholder="on price you wanted to sell"></CustomeInputBox>
            </span>

        </section>
    }

    onFileChange = (val) => {
        var data = [];

        var prog = new Map();
        for (var v = 0; v < val.target.files.length; v++) {
            data.push(val.target.files[v]);
            prog.set(v, 0);
        }

        console.log(prog);
        this.setState({
            productImages: data,
            uploadProgress: prog
        });
    }


    pickImages = () => {
        return <section className='product-section-style'>
            <br />
            <div style={{ display: 'flex' }}>
                <div id='title'>
                    5
                </div>
                <label>
                    Product Images
                </label>
            </div>
            <br />
            <span id='real-price-box'>
                <CustomeLabel>Select Product Images<span style={{ color: 'red' }}>*</span></CustomeLabel>
                <CustomeInputBox onChange={(val) => this.onFileChange(val)} type="file" placeholder="photos"></CustomeInputBox>
            </span>
            <br />
            <br />
            {this.state.productImages.map((val) => {
                return <img alt='' src={URL.createObjectURL(val)} />
            })}
        </section>;

    }


    productVariant = () => {
        return <section className='product-section-style'>
            <br />
            <div style={{ display: 'flex' }}>
                <div id='title'>
                    3
                </div>
                <label>
                    Product Variant
                </label>
            </div>
            <br />
            <span id='real-price-box'>
                <CustomeLabel>Select gender<span style={{ color: 'red' }}>*</span></CustomeLabel>
                <CustomeSelector onChange={(data) => {
                    this.setState({
                        gender: data
                    });
                }} options={this.state.genderList} />
            </span>
            <br />
            <br />
            <span id='real-price-box'>
                <CustomeLabel>Main category<span style={{ color: 'red' }}>*</span></CustomeLabel>
                <CustomeSelector onChange={(data) => this.setState({
                    mainCategory: data,
                    subCategoryList: data.subCategory,
                    subCategory: data.subCategory[0]
                })} options={this.state.mainCategoryList} />
            </span>
            <br />
            <br />
            <span id='real-price-box'>
                <CustomeLabel>Sub category<span style={{ color: 'red' }}>*</span></CustomeLabel>
                <CustomeSelector onChange={(data) => this.setState({
                    subCategory: data,
                })} options={this.state.subCategoryList} />
            </span>
            <br />
            <br />
            <span id='real-price-box'>
                <CustomeLabel>Size<span style={{ color: 'red' }}>*</span></CustomeLabel>
                <CustomeSelector onChange={(data) => this.setState({
                    productSize: data,
                })} options={this.state.productSizeList} />
            </span>
            <br />
            <br />
        </section>;

    }


    productOrganization = () => {
        return <section className='product-section-style'>
            <br />
            <div style={{ display: 'flex' }}>
                <div id='title'>
                    4
                </div>
                <label>
                    BrnadName
                </label>
            </div>
            <br />
            <span id='title-box'>
                <CustomeLabel>Brand<span style={{ color: 'red' }}>*</span></CustomeLabel>
                <CustomeInputBox onChange={this.onBrandNameChange} type="text" placeholder="brandName"></CustomeInputBox>
            </span>
            <br />
            <br />
            <span id='sub-title-box'>
                <CustomeLabel>Seller<span style={{ color: 'red' }}>*</span></CustomeLabel>
                <CustomeInputBox onChange={this.onSellerChange} type="text" placeholder="seller"></CustomeInputBox>
            </span>
            <br />
            <br />
            <span id='description-box'>
                <CustomeLabel>Manufacturer<span style={{ color: 'red' }}>*</span></CustomeLabel>
                <CustomeTextareaBox onInvalid={this.validateManufacturer} required={true} onChange={this.onManufacturerChange} type="text" height="100px" placeholder="manufaturer details"></CustomeTextareaBox>
            </span>
            <br /><br />
        </section>
    }


    onArticalNoChange = (val) => this.setState({ articalNo: val.target.value.toString() });
    onTitleChange = (val) => this.setState({ title: val.target.value });
    onSubTitleChange = (val) => this.setState({ subTitle: val.target.value });
    onDescriptionChange = (val) => this.setState({ description: val.target.value });
    onMoreInfoChange = (val) => this.setState({ moreInfo: val.target.value });
    onRealPriceChange = (val) => this.setState({ realPrice: val.target.value });
    onDiscountedPriceChange = (val) => this.setState({ discountedPrice: val.target.value });
    onBrandNameChange = (val) => this.setState({ brandName: val.target.value });
    onSellerChange = (val) => this.setState({ seller: val.target.value });
    onManufacturerChange = (val) => this.setState({ manufacturer: val.target.value });


    createProduct = () => {
        this.setState({
            progress: true
        });
        ProductTransaction
            .createProduct(this.state)
            .then((data) => {
            if(data.status === 500){
                alert("Internal Server Error");
                this.setState({
                    progress: false
                });
            }
            else
                data.json().then((data) => {
                    
                    alert("product created wait for image upload ");                
                    this.uploadImages(data.id);
                })
        }).catch((err) => { alert("" + err); this.setState({
            progress: false
        });});
    }

    uploadImages(id) {
        ProductImages.uploadImagesRecu(this.state.productImages,id,0,(val) => {
            var list = this.state.productImageUrls;
            list.push(val);
           

            this.setState({
                productImageUrls: list
            });
        }, [],() => {
            this.setState({
                progress: false
            });
        },()=>{
            this.setState({
                progress: false
            });
        });
    }




    checkValidity() {
        if (
            this.state.articalNo.toString().trim().length === 0 ||
            this.state.title.toString().trim().length === 0 ||
            this.state.subTitle.toString().trim().length === 0 ||
            this.state.description.toString().trim().length === 0 ||
            this.state.moreInfo.toString().trim().length === 0 ||
            this.state.subCategory.toString().trim().length === 0 ||
            this.state.mainCategory.toString().trim().length === 0 ||
            this.state.realPrice.toString().trim().length === 0 ||
            this.state.discountedPrice.toString().trim().length === 0 ||
            this.state.brandName.toString().trim().length === 0 ||
            this.state.manufacturer.toString().trim().length === 0 ||
            this.state.seller.toString().trim().length === 0 ||
            this.state.productSize.toString().trim().length === 0) {
            alert("Please complete all fields");
        }
        else {
            this.createProduct();
        }
    }


}
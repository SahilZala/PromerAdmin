import React from 'react';
import './create-product-style.css';
import CustomeSubmitButton from '../../../Components/Buttons/cutome-submit-button';
import CustomeClearButton from '../../../Components/Buttons/custome-clear-button';
import CustomeLabel from '../../../Components/Labels/custome-label';
import CustomeInputBox from '../../../Components/InputBox/custome-input-box';
import CustomeTextareaBox from '../../../Components/InputBox/custome-textarea-box';
import axios from 'axios';
import CustomeSelector from '../../../Components/Selector/custome-selection';

export default class CreateProduct extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            subTitle: '',
            description: '',
            moreInfo: '',
            realPrice: 0.0,
            discountedPrice: 0.0,
            productImages: []
        }
    }
    render() {
        return (
            <section className='create-product-body'>
                <br />
                <form onReset={()=>{this.setState({productImages: []})}} onSubmit={this.handleSubmit} className='create-product-form'>
                    <header>
                        <div className='phase1'>
                            <p className='create-product-title'>New Product</p>
                        </div>
                        <div className='phase2'>
                            <CustomeClearButton type='reset' id="clear">Clear</CustomeClearButton>
                            <CustomeSubmitButton type='submit' id="publish">Publish</CustomeSubmitButton>
                        </div>
                    </header>


                    <body>
                        <section id='phase1'>
                            {this.productDetails()}
                            {this.productPricing()}
                        </section>
                        <section id='phase2'>
                            {this.productVariant()}
                            {this.pickImages()}
                        </section>
                    </body>

                </form>
            </section>
        );
    }

    handleSubmit = (event) => { console.log(event); console.log(this.state); event.preventDefault(); this.createProduct();}


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
                <CustomeInputBox onChange = {(val) => this.onFileChange(val)} type="file" placeholder="photos"></CustomeInputBox>
            </span>
            <br />
            <br />
            { this.state.productImages.map((val) => {
               return <img alt='' src={URL.createObjectURL(val)}/>
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
                <CustomeSelector/>
            </span>
            <br />
            <br />
           
        </section>;

    }



    onTitleChange = (val) => this.setState({title: val.target.value});
    onSubTitleChange = (val) => this.setState({subTitle: val.target.value});
    onDescriptionChange = (val) => this.setState({description: val.target.value});
    onMoreInfoChange = (val) => this.setState({moreInfo: val.target.value});
    onRealPriceChange = (val) => this.setState({realPrice: val.target.value});
    onDiscountedPriceChange = (val) => this.setState({discountedPrice: val.target.value});

    onFileChange = (val) => {
        var data = [];
        console.log(val.target.files);
        for(var v = 0;v< val.target.files.length;v++)
            data.push(val.target.files[v]);
        this.setState({
            productImages: data
        });
    }




    createProduct = () => {

        const formData = new FormData();
    
        // let data = {
        //     "productDetails": {
        //         "title": "Bules eye",
        //         "subTitle": "subTitle",
        //         "description": "description",
        //         "moreInfo": "moreInfo"
        //     },
        //     "productPricing": {
        //         "realPrice": 300.0,
        //         "discountPrice": 125.0
        //     },
        //     "productVariant": {
        //         "gender": "MALE",
        //         "size": "FREE",
        //         "color": "MULTICOLOR",
        //         "mainCategory": {
        //             "id":  "78aeb94e-9260-4cae-afdc-e617ee532f67"
        //         },
        //         "subCategory": {
        //             "id": "711b7591-8f70-4b67-b127-aa80e615cc29"
        //         },
        //         "netQuantity": 3
        //     },
        //     "productInventory": {
        //         "inStock": 105
        //     },
        //     "productOrganization": {
        //         "brandName": "OWN",
        //         "seller": "OWN",
        //         "manufacturer": "OWn"
        //     },
        //     "activation": true
        // };

        this.state.productImages.forEach((e) => formData.append("file",e));
        axios.post("http://localhost:8083/product_service/admin/create/product/images/upload",formData, {
            headers: { 
                "Content-Type": "multipart/form-data",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjEyM0BnbWFpbC5jb20iLCJleHAiOjE2OTMzNzEyNjksImlhdCI6MTY5MzMzNTI2OX0.8brHJCHDeQznXRIWg5g7M1rycoSpZDltM36yCZcFoQM"
            },
        }).then((e) => console.log(e));


        // fetch("http://localhost:8081/product_service/admin/create/product/images/upload",{
        //     method: "POST",
        //     body: formData,
        //     headers: {
                
        //         "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjEyM0BnbWFpbC5jb20iLCJleHAiOjE2OTMzNjc5MDcsImlhdCI6MTY5MzMzMTkwN30.JczCzqUpmJqbpbx-4i72j0_vqcXVdK99nnqa8ChX59U"
        //     }
        // });

        // axios.post({
        //     method: "post",
        //     url: "http://localhost:8081/product_service/admin/create/product/images/upload",
        //     data: formData,
        //     headers: { 
        //         "Content-Type": "multipart/form-data",
        //         // "Access-Control-Allow-Origin": "*"
        //         "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjEyM0BnbWFpbC5jb20iLCJleHAiOjE2OTMzNjc5MDcsImlhdCI6MTY5MzMzMTkwN30.JczCzqUpmJqbpbx-4i72j0_vqcXVdK99nnqa8ChX59U"
        //     },
        // });
    }
}
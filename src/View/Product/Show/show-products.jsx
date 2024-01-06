import React from "react";
import './show-products.css';
import { Create } from "@mui/icons-material";
import CustomeStatusLabel from "../../../Components/Labels/custome-status-label";
import { ProductTransaction } from "../../../Transaction/product_transaction";
import CircularProgress from '@mui/material/CircularProgress';
import UpdateDeleteDailog from "../../../Components/Dailog/update-delete-dailog";
import ProductImages from "../../../Transaction/product_images";

export default class ShowProducts extends React.Component{

    constructor(){
        super();
        this.state = {
            data : [],
            progress: true,
            updateDeletDailog: false,
            details: null,
        }
    }
    

    componentDidMount(){
       this.getAllProducts();
    }


    render() {
        return (<>
            <section className='show-product-body'>
                <br />                
                <header>
                    <p className='show-product-title'>Show Products</p>
                </header>

                <>
                    <br/>
                    <table>
                    <thead>
                        <tr style={{ borderBottom: "1px var(--main-color-light-grey) solid" }}>
                            <th style={{
                                flex: 1,
                                justifyContent: "flex-start"
                            }}>#Article No</th>
                            <th style={{flex: 3}}>Product title</th>
                            <th style={{flex: 2}}>Main Category</th>
                            <th style={{flex: 2}}>Sub Category</th>
                            <th style={{flex: 1}}>Price</th>
                            <th style={{flex: 1}}>Status</th>
                            <th style={{
                                flex: 1,
                                justifyContent: "center"
                            }}>Action</th>
                        </tr>
                        </thead>
                        {this.state.progress === true ? <CircularProgress /> : <></>}
                        <tbody>
                        {this.state.data.map((d,index) => 
                            <tr key={index}>
                                <td style={{
                                    flex: 1,
                                    justifyContent: "flex-start"
                                }}>{d.data.productDetails.articleNumber}</td>
                                <td style={{flex: 3}}>{d.data.productDetails.title}</td>
                                <td style={{flex: 2}}>{d.data.productVariant.mainCategory.title}</td>
                                <td style={{flex: 2}}>{d.data.productVariant.subCategory.title}</td>
                                <td style={{flex: 1}}>{d.data.productPricing.discountPrice}</td>
                                <td style={{flex: 1}}>
                                    <CustomeStatusLabel label={d.data.activation === true ? "ACTIVE" : "DEACTIVE"} isActive={d.data.activation}/>
                                </td> 
                                <td style={{
                                    flex: 1,
                                    justifyContent: "center"
                                }} >{this.state.data[index].progress === false ? <Create onClick={()=>{
                                    this.showUpdateDeleteDailogBox(d);
                                }} style={{
                                    color: "#0496ff",
                                    cursor: "pointer"
                                }}/> : <CircularProgress/>}</td>
                            </tr>
                            )}
                            </tbody>
                        </table>
                    <br/>
                </>

                {this.state.details !== null ? <UpdateDeleteDailog deleteDailog={(val)=>this.deleteProduct(val)} updateDailog={()=>this.updateProduct()} data={this.state.details} open={this.state.updateDeletDailog} handleClose={()=>{this.setState({updateDeletDailog: false})}}/> : <></>}
            </section>
            </>
        );
    }


    getAllProducts = () =>  {
        this.setState({
            progress: true
        });
    ProductTransaction.getAllProducts().then((data) => data.json().then((val) => 
       {
        let mainData = [];
        val.forEach((val) => {
            mainData.push({
                data: val,
                progress: false
            });
        })
        
        this.setState({
            data : mainData,
            progress: false
        })
        }
    ).catch((err) => {
        console.log("err"+err)
        this.setState({
            progress: false
        });
    })
    ).catch((err) => {
        console.log(err);
        this.setState({
            progress: false
        });
    });
    }

    showUpdateDeleteDailogBox = (data) => {
       this.setState({
        updateDeletDailog: true,
        details: data
       }); 
    }


    deleteProduct(val){
        
        
        this.setState({updateDeletDailog: false});

        console.log(val.data);

        ProductTransaction.deleteProduct(val.data).then((v) => {


            if(v.status === 500)
                alert("Internal server error");
            else{
                console.log(v.status);
                console.log(val.data);

                val.data.productImages.forEach((data) => ProductImages.deleteImage(val.data.id,data.title));
            
                this.getAllProducts();
            }
        }).catch((err) => {
            alert("err"+err);
            

        });
        
    }

}
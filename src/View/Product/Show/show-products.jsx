import React from "react";
import './show-products.css';
import { Create } from "@mui/icons-material";
import CustomeStatusLabel from "../../../Components/Labels/custome-status-label";
import { ProductTransaction } from "../../../Transaction/product_transaction";

export default class ShowProducts extends React.Component{

    constructor(){
        super();
        this.state = {
            data : []
        }
    }
    

    componentDidMount(){
       this.getAllProducts();
    }


    render() {
        return (
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
                            }}>#Id</th>
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
                        <tbody>
                        {this.state.data.map((d,index) => 
                            <tr key={index}>
                                <td style={{
                                    flex: 1,
                                    justifyContent: "flex-start"
                                }}>{d.id.slice(0,10)}</td>
                                <td style={{flex: 3}}>{d.productDetails.title}</td>
                                <td style={{flex: 2}}>{d.productVariant.mainCategory.title}</td>
                                <td style={{flex: 2}}>{d.productVariant.subCategory.title}</td>
                                <td style={{flex: 1}}>{d.productPricing.discountPrice}</td>
                                <td style={{flex: 1}}>
                                    <CustomeStatusLabel label={d.activation === true ? "ACTIVE" : "DEACTIVE"} isActive={d.activation}/>
                                </td>
                                <td style={{
                                    flex: 1,
                                    justifyContent: "center"
                                }} ><Create style={{
                                    color: "#0496ff",
                                    cursor: "pointer"
                                }}/></td>
                            </tr>
                            )}
                            </tbody>
                        </table>
                    <br/>
                </>
            </section>
        );
    }


    getAllProducts = () =>  ProductTransaction.getAllProducts().then((data) => data.json().then((val) => 
        this.setState({
            data : val
        })
    ).catch((err) => console.log("err"+err))
    ).catch((err) => {
        console.log(err);
    });
}
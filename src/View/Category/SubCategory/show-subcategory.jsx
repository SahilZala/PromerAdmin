import React from "react";
import "./show-subcategory.css";
import { Create } from "@mui/icons-material";
// import CategoryTransaction from "../../../Transaction/category_transaction";
import CircularProgress from '@mui/material/CircularProgress';
import CategoryTrasaction from "../../../Transaction/firebase/category_transaction";
export default class ShowSubCategory extends React.Component{
    
    constructor()
    {
        super();
        this.state = {
            data: [],
            progress: false
        }
    }

    componentDidMount(){
        this.getMainCategory();
    }


    render(){
        return(<section className="show-sub-category-body">
            <br/>
            <header>
                <p className="show-sub-category-title">Show Sub Category</p>
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
                            <th style={{flex: 3}}>Category title</th>
                            <th style={{flex: 3}}>Main category title</th>
                            <th style={{
                                flex: 1,
                                justifyContent: "center"
                            }}>Action</th>
                        </tr>
                    </thead>
                    {this.state.progress === true ? <CircularProgress/> : <></>}
                    <tbody>
                    {
                        this.state.data.map((data,index) => this.getTableBody(data,index))
                    }
                    </tbody>
                </table>
            </>
        </section>);
    }

    getTableBody = (data,index) => <tr key={index}>
        <td style={{
            justifyContent: 'flex-start',
            flex: '1'
        }}>{data.subCategory.id}</td>
        <td style={{
            justifyContent: 'center',
            flex: '3'
        }}>{data.subCategory.title}</td>
        <td style={{
            justifyContent: 'center',
            flex: '3'
        }}>{data.mainCategory.title}</td>
        <td style={{
            justifyContent: 'center',
            flex: 1,
        }}><Create style={{
            color: "#0496ff",
            cursor: "pointer"
        }}/></td>
    </tr>;

    getMainCategory(){
        this.setState({
            progress: true
        })
    //     CategoryTrasaction.getSubCategory().then((data) => data.json().then((val) => {
    //         this.setState({
    //             data: val,
    //             progress: false
    //         });

    //         console.log(val);
    //     }).catch((error) => {console.log("json error "+error)
    //     this.setState({
    //         progress: false
    //     })
    // })).catch((error) => {
    //         alert(error);
    //         this.setState({
    //             progress: false
    //         })
    //     });


        CategoryTrasaction.getSubCategory().then((val) => {
            console.log(val);

            this.setState({
                data: val,
                progress: false
            });
        })
    }
}
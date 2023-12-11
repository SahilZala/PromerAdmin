import React from "react";
import './show-main-catrgory.css';
import CategoryTransaction from "../../../Transaction/category_transaction";
import { Create } from "@mui/icons-material";
export default class ShowMainCategory extends React.Component {

    constructor(){
        super();

        this.state = {
            data: []
        }
    }

    componentDidMount(){
        this.getMainCategory();
    }

    render(){
        return(
            <section className="show-main-category-body">
                <br/>
                <header>
                    <p className="show-main-category-title">Show Main Category</p>
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
                                <th style={{
                                    flex: 1,
                                    justifyContent: "center"
                                }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.data.map((data,index) => <tr key={index}>
                                <td style={{
                                    justifyContent: 'flex-start',
                                    flex: '1'
                                }}>{data.id}</td>
                                <td style={{
                                    justifyContent: 'center',
                                    flex: '3'
                                }}>{data.title}</td>
                                <td style={{
                                    justifyContent: 'center',
                                    flex: 1,
                                }}><Create style={{
                                    color: "#0496ff",
                                    cursor: "pointer"
                                }}/></td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                </>
            </section>
        );
    }

    getMainCategory(){
        CategoryTransaction.getAllMainCategory().then((data) => data.json().then((val) => {
            this.setState({
                data: val
            });
        }).catch((error) => console.log("json error "+error))).catch((error) => {
            alert(error);
        });
    }

}
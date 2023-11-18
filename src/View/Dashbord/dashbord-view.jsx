import React from "react";
import CustomeNavbar from "../../Components/Navbar/custome-navbar";
import CustomeSideBar from "../../Components/Sidebar/custome-sidebar";
import "./dashbord-view-style.css";
import { AppsOutlined, ShoppingBagOutlined, Person2Outlined, CategoryOutlined } from "@mui/icons-material";
import CreateProduct from "../Product/Create/create-product";
import CreateMainCategory from "../../Components/Category/MainCategory/create-main-category";
import ShowProducts from "../Product/Show/show-products";
export default class Dashbord extends React.Component {
    constructor() {
        super();

        this.myViews = {
            0: <>Overview</>,
            1: <>Products</>,
            2: <>Users</>,  
            3: <>Categorys</>,
            10: <CreateProduct></CreateProduct>,
            11: <ShowProducts/>,
            31: <CreateMainCategory/>
        }
        this.state = {
            width: "0px",
            marginLeft: "0px",
            isOpen: false,
            sidebarItemData: [{
                id: 0,
                item: 'Overview',
                icon: <AppsOutlined />,
                subItems: []
            },
            {
                id: 1,
                item: 'Products',
                icon: <ShoppingBagOutlined />,
                subItems: [
                    {
                        id: 10,
                        item: "Create Product",

                    },
                    {
                        id: 11,
                        item: "Show Product"
                    }
                ]
            },
            {
                id: 2,
                item: 'Users',
                icon: <Person2Outlined />,
                subItems: []
            },
            {
                id: 3,
                item: 'Categorys',
                icon: <CategoryOutlined />,
                subItems: [
                    {
                        id: 31,
                        item: "Create main category"
                    }
                ]
            }
            ],
            sidebarSelectedItemIndex: 0,
            selectedSubView: 0,
        }
    }
    render() {
        return (
                <section style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100vh'
                }}>
                <header>
                    <section id="navbar">
                        <CustomeNavbar onClick={() => this.state.isOpen ? this.closeDrawer() : this.openDrawer()} />
                    </section>
                </header>
                    <div style={{flex: '1'}}>
                        <section className="main">
                            <section className="side-bar">
                                <CustomeSideBar onSubItemClick={(id) => this.onSubItemClick(id)} openItem={(index) => this.setState({ sidebarSelectedItemIndex: index,selectedSubView: this.state.sidebarItemData[index].id })} sidebarSelectedItemIndex={this.state.sidebarSelectedItemIndex} itemData={this.state.sidebarItemData} width={this.state.width} />
                            </section>
                            <section  className="main-space">
                                {this.myViews[this.state.selectedSubView]}
                            </section>
                        </section>
                    </div>
                </section>
            
        );
    }


    openDrawer = () => {
        console.log("open drawer");

        this.setState({
            width: "250px",
            isOpen: true
        });


    }

    closeDrawer = () => {
        console.log("close drawer");

        this.setState({
            width: "0px",
            isOpen: false
        });
    }

    onSubItemClick = (id) => {
        this.setState({
            selectedSubView: id
        })
    }
}
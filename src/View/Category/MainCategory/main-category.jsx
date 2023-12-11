import React from "react";
import './main-category.css';
import CustomeClearButton from "../../../Components/Buttons/custome-clear-button";
import CustomeSubmitButton from "../../../Components/Buttons/cutome-submit-button";
import CustomeLabel from "../../../Components/Labels/custome-label";
import CustomeInputBox from "../../../Components/InputBox/custome-input-box";
import CategoryTransaction from "../../../Transaction/category_transaction";

export default class MainCategory extends React.Component
{
    constructor(props){
        super(props);

        this.state = {
            mainCategory: ''
        }
    }
    render(){
        return (
            <section className='create-main-category-body'>
                <br />
                <form onReset={()=>{this.setState({mainCategory: ''})}} onSubmit={this.handleSubmit} className='create-main-category-form'>
                    <header>
                        <div className='phase1'>
                            <p className='create-main-category-title'>New Main Category</p>
                        </div>
                        <div className='phase2'>
                            <CustomeClearButton type='reset' id="clear">Clear</CustomeClearButton>
                            <CustomeSubmitButton type='submit' id="publish">Publish</CustomeSubmitButton>
                        </div>
                    </header>


                    <>
                        <section>
                            {this.mainCategoryDetails()}
                        </section>
                    </>
                </form>
            </section>
        );
    }

    handleSubmit = (event) => { event.preventDefault(); this.createMainCategory();}

    mainCategoryDetails = () => {
        return <section className='main-category-section-style'>
            <br />
            <div style={{ display: 'flex' }}>
                <div id='title'>
                    1
                </div>
                <label>
                    Main Category Details
                </label>
            </div>
            <br />
            <span id='title-box'>
                <CustomeLabel>Main Category Name<span style={{ color: 'red' }}>*</span></CustomeLabel>
                <CustomeInputBox onChange={this.onMainCategoryChange} type="text" placeholder="title of product"></CustomeInputBox>
            </span>
            
        </section>
    }

    onMainCategoryChange = (val) => this.setState({mainCategory: val.target.value});

    createMainCategory = () => {
        let data = {
            title: this.state.mainCategory
        };
        CategoryTransaction.createMainCategory(data).then((data) => data.json().then((val) => {
            console.log(val);
            alert("main category created");
        })).catch((ex) => alert(ex));
    }
}
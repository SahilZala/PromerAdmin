import React from "react";
import './create-main-category.css';
import CustomeClearButton from "../../Buttons/custome-clear-button";
import CustomeSubmitButton from "../../Buttons/cutome-submit-button";
import CustomeLabel from "../../Labels/custome-label";
import CustomeInputBox from "../../InputBox/custome-input-box";

export default class CreateMainCategory extends React.Component
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


                    <body>
                        <section id='phase1'>
                            {this.mainCategoryDetails()}
                        </section>
                    </body>
                </form>
            </section>
        );
    }

    handleSubmit = (event) => { console.log(event); console.log(this.state); event.preventDefault(); this.createMainCategory();}

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
        console.log(this.state.mainCategory);
    }
}
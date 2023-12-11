import React from 'react';
import './sub-category.css';
import CustomeClearButton from '../../../Components/Buttons/custome-clear-button';
import CustomeSubmitButton from '../../../Components/Buttons/cutome-submit-button';
import CustomeLabel from '../../../Components/Labels/custome-label';
import CustomeInputBox from '../../../Components/InputBox/custome-input-box';
import CustomeSelector from '../../../Components/Selector/custome-selection';
import { ProductTransaction } from '../../../Transaction/product_transaction';
import CategoryTransaction from '../../../Transaction/category_transaction';

export default class SubCategory extends React.Component{


    constructor(){
        super();
        this.state  = {
            mainCategory: "",
            mainCategoryList: [],
            subCategory: ""
        }
    }

    componentDidMount(){
        ProductTransaction.getMainCategory()
        .then((data) => data.json().then((value) => this.setState({
            mainCategory: value[0],
            mainCategoryList: value,
            
        })))
        .catch((error) => console.log(" errr " + error));

    }

    render(){
        return(
            <section className='create-sub-category-body'>
                <br />
                <form onReset={()=>{this.setState({mainCategoryList: []})}} onSubmit = { (event) => {event.preventDefault(); this.handleSubmit();}} className='create-sub-category-form'>
                    <header>
                        <div className='phase1'>
                            <p className='create-sub-category-title'>Create sub category</p>
                        </div>
                        <div className='phase2'>
                            <CustomeClearButton type='reset' id="clear">Clear</CustomeClearButton>
                            <CustomeSubmitButton type='submit' id="publish">Publish</CustomeSubmitButton>
                        </div>
                    </header>

                    <section style={{display: 'flex'}}>
                        <section id='phase1'>
                            {this.createSubCategory()}
                        </section>
                    </section>
                </form>
            </section>
        );
    }

    createSubCategory(){
        return <section className='sub-category-section-style'>
            <br />
            <div style={{ display: 'flex' }}>
                <div id='title'>
                    1
                </div>
                <label>
                    Sub Category
                </label>
            </div>
            <br />
            <span id='title-box'>   
                <CustomeLabel>Main category.<span style={{ color: 'red' }}>*</span></CustomeLabel>
                <CustomeSelector onChange={(data) => this.setState({
                    mainCategory: data,
                })} options={this.state.mainCategoryList}/>
            </span>
            <br />
            <br />
            <span id='title-box'>
                <CustomeLabel>Sub category title<span style={{ color: 'red' }}>*</span></CustomeLabel>
                <CustomeInputBox onChange={ (val)=> this.onTitleChange(val)} type="text" placeholder="title of sub category"></CustomeInputBox>
            </span>
        </section>;
    }

    onTitleChange(val)
    {
        this.setState({
            subCategory: val.target.value
        });
    }

    handleSubmit() {
        console.log(this.state.subCategory);
        console.log(this.state.mainCategory);

        if(this.state.subCategory.toString().length === 0)
        {
            alert("Please complete all fields");
        }
        else{
            let data = {
                title: this.state.subCategory,
                mainCategory: {
                    id: this.state.mainCategory.id
                }
            }
            CategoryTransaction.createSubCategory(data).then((data) => data.json().then((val) => {
                console.log(val);
                alert("subcategory crated.");
            })).catch((ex) => {
                alert(ex);
            });
        }
    }
}
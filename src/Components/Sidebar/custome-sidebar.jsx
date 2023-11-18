import React from "react";
import './custome-sidebar-style.css';
import SidebarItem from "./sidebar-item";
export default class CustomeSideBar extends React.Component {
  
    render() {
        return (
            <div style={{
                width: this.props.width
            }} className="custome-sidebar-style">
                <div style={{height: '30px'}} />
                {
                    this.props.itemData.map((d,index) =>

                        <SidebarItem key={index} onSubItemClick={(id)=>this.props.onSubItemClick(id)} item={d} index={index} openItem={(index)=>this.props.openItem(index)} isOn={this.props.sidebarSelectedItemIndex === index}>
                            {d.icon}
                        </SidebarItem>
                    )
                }
            </div>
        );
    };
}
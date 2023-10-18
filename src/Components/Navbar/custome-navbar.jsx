import BrandName from '../BrandName/brand-name';
import SidebarNavButton from '../Sidebar/sidebar_navigation_button';
import './custome-navbar.css';

export default function CustomeNavbar(props)
{
    return(
        <>
            <div className="navbar-style">     
                <SidebarNavButton onClick={()=>props.onClick()}/>
                <BrandName/>
            </div>
        </>
    );
}

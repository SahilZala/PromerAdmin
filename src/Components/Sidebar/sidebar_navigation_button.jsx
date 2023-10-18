import { Architecture } from "@mui/icons-material";

export default function SidebarNavButton(props){
    return(
        <span onClick={()=>props.onClick()}>
            <Architecture style={{
                color: 'var(--main-color-pich)',
                fontSize: '25px',
                margin: '2.5px',
                cursor: 'pointer'
            }}></Architecture>
        </span>
    );
}
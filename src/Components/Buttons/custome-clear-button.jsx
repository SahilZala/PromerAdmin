import { Clear } from '@mui/icons-material';
import './custome-clear-button.css';
export default function CustomeClearButton(props){
    return <button type={props.type} id={props.id} className='custome-clear-button-style'>  
        <Clear style={{
            fontSize: '15px',
            paddingRight: '5px'
        }}/>  
        {props.children}
        
    </button>;
}
import { Check } from '@mui/icons-material';
import './custome-submit-button.css';
export default function CustomeSubmitButton(props){
    return <button id='custome-submit-button-style'>  
        <Check style={{
            fontSize: '15px',
            paddingRight: '5px'
        }}/>  
        {props.children}
        
    </button>;
}
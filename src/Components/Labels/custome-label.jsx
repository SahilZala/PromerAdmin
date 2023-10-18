import './custome-label-style.css';
export default function CustomeLabel(props){
    return <label className='custome-label-style'>
        {props.children}
    </label>
}
import './custome-input-box-style.css';

export default function CustomeInputBox(props){
    return <input onChange={(val) => props.onChange(val)} type={props.type} placeholder={props.placeholder} className="custome-input-box-style" multiple="true" accept='.png,.jpg,.jpeg'></input>
}
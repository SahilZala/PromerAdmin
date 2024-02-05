import './custome-textarea-box-style.css';

export default function CustomeTextareaBox(props){
    return <textarea value={props.value} onChange={props.onChange} inputMode={props.type} style={{height: props.height}} placeholder={props.placeholder} className="custome-textarea-box-style"></textarea>
}
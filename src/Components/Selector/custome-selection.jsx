import './custome-selection.css';
export default function CustomeSelector(props)
{
    return <select className='custome-selector-style' onChange={(select) => {return props.onChange(props.options[select.target.selectedIndex]);}} onSelect={(selected) => console.log(selected.target.value)}>
        {props.options.map((data,index) => props.selected !== undefined && props.selected.id.toString() === data.id.toString() ? <option selected  key={index}>{data.title}</option> : <option key={index}>{data.title}</option>)}
      
    </select>;
}